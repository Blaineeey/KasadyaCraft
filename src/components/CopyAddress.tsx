'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard can be unavailable in some contexts; the address is still visible to select.
    }
  }

  return (
    <div className="addr-block">
      <code>{address}</code>
      <button type="button" className="copy-btn" onClick={copy} data-copied={copied} aria-live="polite">
        {copied ? <Check /> : <Copy />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}
