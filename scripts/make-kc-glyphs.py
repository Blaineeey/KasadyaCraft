"""
Builds "KC Glyphs": a tiny companion font that redraws the six Pixelify Sans
glyphs players kept misreading on the site:

    2, 3 and B read as 8      5 reads as S      C and c read as O and o

Pixelify closes those shapes with one-pixel gaps that vanish once the text is
anti-aliased at 13-20px or set at weight 600-700 ("KasadyaOraft", "8 plots").
The new glyphs sit on the same pixel grid, at the same stroke weight, so they
blend in. They are built from the measurements of each Pixelify weight instance,
not traced from any other font.

The site loads the output with next/font/local and a unicode-range, placed
first in --font-pixel (see src/app/layout.tsx and globals.css). The browser
takes only these six characters from it; everything else stays Pixelify.

Licence: Pixelify Sans is SIL Open Font License 1.1 (no Reserved Font Name).
This is a modified version, renamed, and it stays under the OFL; the copyright
and licence records are kept in the font's name table.

Usage (Python 3.10+):
    pip install fonttools brotli skia-pathops
    python scripts/make-kc-glyphs.py <PixelifySans[wght].ttf|.woff2> src/app/fonts

The source is the Google Fonts variable build of Pixelify Sans
(github.com/google/fonts/tree/main/ofl/pixelifysans). Commit the four .woff2.
Owner: PIXEL UI DESIGNER.
"""

import os
import sys

from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont
from fontTools.ttLib.removeOverlaps import removeOverlaps
from fontTools.varLib import instancer

WEIGHTS = (400, 500, 600, 700)
FAMILY = 'KC Glyphs'
CHARS = '235BCc'


def coords(font, ch):
    """Sorted unique x and y values of a glyph outline."""
    gs = font.getGlyphSet()
    pen = RecordingPen()
    gs[font.getBestCmap()[ord(ch)]].draw(pen)
    pts = [a[0] for _, a in pen.value if a]
    return sorted({round(p[0]) for p in pts}), sorted({round(p[1]) for p in pts})


def measure(font):
    """Read the pixel grid of one weight instance from its own glyphs."""
    ox, oy = coords(font, 'O')  # 6 x / 6 y: outer, chamfer step, inner (both sides)
    _, ty = coords(font, '2')  # stub ends + middle band
    fx, _ = coords(font, '5')  # Pixelify's centre column
    _, sy = coords(font, 'o')  # x-height
    assert len(ox) == 6 and len(oy) == 6 and len(ty) == 12 and len(fx) == 8 and len(sy) == 6, 'unexpected source outlines'
    m = {}
    m['x0'], m['xc0'], m['x1'], m['x2'], m['xc1'], m['x3'] = ox
    m['y0'], m['yc0'], m['y1'], m['y2'], m['yc1'], m['y3'] = oy
    # 2: [-12, 78, 88, stubTop, midBottom, leftStemTop, rightStemBottom, midTop, stubBottom, 530, 540, 631]
    m['yS0'], m['yM0'], m['yMl'], m['yMr'], m['yM1'], m['yS1'] = ty[3:9]
    m['xMid'] = fx[4]  # inner edge of the 5's centre column
    m['yx2'], m['yxc1'], m['yx3'] = sy[3:6]  # o: inner top, chamfer step, top
    return m


def rects_for(ch, m):
    """Each glyph as overlapping rectangles (x0, y0, x1, y1), font units."""
    x0, xc0, x1, x2, xc1, x3 = m['x0'], m['xc0'], m['x1'], m['x2'], m['xc1'], m['x3']
    y0, yc0, y1, y2, yc1, y3 = m['y0'], m['yc0'], m['y1'], m['y2'], m['yc1'], m['y3']
    yS0, yM0, yMl, yMr, yM1, yS1 = m['yS0'], m['yM0'], m['yMl'], m['yMr'], m['yM1'], m['yS1']
    if ch == 'C':
        # an O with the right side cut back to one-pixel hooks: a real gap, ~3px tall
        return [
            (xc0, y0, xc1, y1),  # bottom bar
            (xc0, y2, xc1, y3),  # top bar
            (x0, yc0, x1, yc1),  # spine
            (x2, yc0, x3, yS0),  # lower hook
            (x2, yS1, x3, yc1),  # upper hook
        ]
    if ch == 'c':
        # bars run to the right edge, no hooks: the opening stays wide at every weight
        yx2, yx3, yxc1 = m['yx2'], m['yx3'], m['yxc1']
        return [
            (xc0, y0, x3, y1),
            (xc0, yx2, x3, yx3),
            (x0, yc0, x1, yxc1),
        ]
    if ch == '2':
        # Pixelify's 2 minus the lower-right hook, with a square foot
        return [
            (xc0, y2, xc1, y3),  # top bar
            (x0, yS1, x1, yc1),  # top-left hook
            (x2, yMr, x3, yc1),  # upper right stem
            (xc0, yM0, xc1, yM1),  # middle band
            (x0, yc0, x1, yMl),  # lower left stem
            (xc0, y0, x3, y1),  # flat foot, square right corner
        ]
    if ch == '3':
        # short middle bar that starts at the centre column: the left side stays open
        return [
            (xc0, y2, xc1, y3),
            (x0, yS1, x1, yc1),  # top-left hook
            (x2, yMr, x3, yc1),
            (m['xMid'], yM0, xc1, yM1),  # short middle bar
            (x2, yc0, x3, yMl),
            (x0, yc0, x1, yS0),  # bottom-left hook
            (xc0, y0, xc1, y1),
        ]
    if ch == 'B':
        # square spine on the left (Pixelify chamfers it, which makes B look like 8)
        return [
            (x0, y0, x1, y3),  # spine
            (x0, y2, xc1, y3),  # top bar
            (x0, yM0, xc1, yM1),  # waist
            (x0, y0, xc1, y1),  # bottom bar
            (x2, yMr, x3, yc1),  # upper bowl
            (x2, yc0, x3, yMl),  # lower bowl
        ]
    if ch == '5':
        # flat top with a square corner, then a bowl: never an S
        return [
            (x0, y2, x3, y3),  # flat top
            (x0, yM0, x1, y3),  # upright
            (x0, yM0, xc1, yM1),  # middle band
            (x2, yc0, x3, yMl),  # bowl
            (x0, yc0, x1, yS0),  # bottom-left hook
            (xc0, y0, xc1, y1),  # bottom bar
        ]
    raise ValueError(ch)


def draw(rects):
    pen = TTGlyphPen(None)
    for ax, ay, bx, by in rects:
        # clockwise (TrueType outer contour)
        pen.moveTo((ax, ay))
        pen.lineTo((ax, by))
        pen.lineTo((bx, by))
        pen.lineTo((bx, ay))
        pen.closePath()
    return pen.glyph()


def rename(font, weight):
    style = {400: 'Regular', 500: 'Medium', 600: 'SemiBold', 700: 'Bold'}[weight]
    ps = FAMILY.replace(' ', '') + '-' + style
    name = font['name']
    copyright_ = name.getDebugName(0)
    for rec in list(name.names):
        if rec.nameID not in (0, 13, 14):
            name.removeNames(nameID=rec.nameID)
    name.setName(copyright_ + '. Glyphs 2 3 5 B C c redrawn for KasadyaCraft, 2026.', 0, 3, 1, 0x409)
    name.setName(FAMILY, 1, 3, 1, 0x409)
    name.setName('Regular', 2, 3, 1, 0x409)
    name.setName(f'1.000;KC;{ps}', 3, 3, 1, 0x409)
    name.setName(f'{FAMILY} {style}', 4, 3, 1, 0x409)
    name.setName('Version 1.000', 5, 3, 1, 0x409)
    name.setName(ps, 6, 3, 1, 0x409)
    name.setName(
        'Modified from Pixelify Sans. This Font Software is licensed under the SIL Open Font License, Version 1.1.',
        13, 3, 1, 0x409,
    )
    name.setName('https://openfontlicense.org', 14, 3, 1, 0x409)
    name.setName(FAMILY, 16, 3, 1, 0x409)
    name.setName(style, 17, 3, 1, 0x409)


def build(src, weight):
    font = instancer.instantiateVariableFont(TTFont(src), {'wght': weight})
    m = measure(font)
    cmap = font.getBestCmap()
    names = []
    for ch in CHARS:
        gname = cmap[ord(ch)]
        font['glyf'][gname] = draw(rects_for(ch, m))
        names.append(gname)
    removeOverlaps(font, names)
    for gname in names:
        g = font['glyf'][gname]
        g.recalcBounds(font['glyf'])
        adv, _ = font['hmtx'][gname]
        font['hmtx'][gname] = (adv, g.xMin)

    opts = Options()
    opts.layout_features = []  # no ligatures, no kerning: six lone glyphs
    opts.name_IDs = ['*']
    opts.notdef_outline = True
    opts.hinting = False
    opts.flavor = 'woff2'
    sub = Subsetter(opts)
    sub.populate(unicodes=[ord(c) for c in CHARS])
    sub.subset(font)
    font['OS/2'].usWeightClass = weight
    rename(font, weight)
    return font


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    for w in WEIGHTS:
        font = build(src, w)
        path = os.path.join(out, f'kc-glyphs-{w}.woff2')
        font.flavor = 'woff2'
        font.save(path)
        print(path, os.path.getsize(path), 'bytes')


if __name__ == '__main__':
    main()
