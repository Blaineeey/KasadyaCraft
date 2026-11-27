/**
 * Starter guide registry. One file per guide in this folder, imported and listed here.
 * Verified numbers live in ./facts.ts so every guide stays in sync.
 * Owner: STARTER-GUIDE WRITER.
 */
import type { Guide, GuideStage } from '@/lib/content'
import { claimAPlot } from './claim-a-plot'
import { firstDay } from './first-day'
import { firstDelve } from './first-delve'
import { firstDungeon } from './first-dungeon'
import { joining } from './joining'
import { makingMoney } from './making-money'
import { openAShop } from './open-a-shop'
import { ranksAndKits } from './ranks-and-kits'
import { safetyAndRules } from './safety-and-rules'

export const guideStageOrder: GuideStage[] = ['join', 'first-day', 'next-steps']

export const guideStageLabels: Record<GuideStage, string> = {
  join: 'Getting in',
  'first-day': 'Your first day',
  'next-steps': 'Next steps',
}

export const guideStageBlurbs: Record<GuideStage, string> = {
  join: 'From the launcher to the hub to Survival.',
  'first-day': 'Find your feet, stay safe and earn your first money.',
  'next-steps': 'Build, trade, raid the dungeons and level up.',
}

const all: Guide[] = [joining, firstDay, safetyAndRules, makingMoney, claimAPlot, openAShop, firstDungeon, firstDelve, ranksAndKits]

/** Every guide in reading order (stage, then order). */
export const guides: Guide[] = [...all].sort(
  (a, b) => guideStageOrder.indexOf(a.stage) - guideStageOrder.indexOf(b.stage) || a.order - b.order,
)

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function guidesByStage(stage: GuideStage): Guide[] {
  return guides.filter((g) => g.stage === stage).sort((a, b) => a.order - b.order)
}

/** 1-based position in the reading order. */
export function guideNumber(slug: string): number {
  return guides.findIndex((g) => g.slug === slug) + 1
}
