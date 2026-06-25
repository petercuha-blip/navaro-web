'use client'

import { useState } from 'react'
import type { Translations } from '@/lib/i18n'

interface Props {
  t: Translations['betaForm']
}

export default function BetaForm({ t }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/beta-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none transition focus:border-[#6D35F5] focus:ring-2 focus:ring-[#6D35F5]/20'

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E] text-white text-xl">✓</div>
        <p className="font-semibold text-[#15803D]">{t.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#64748B]">{t.name} *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ján Novák"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-[#64748B]">{t.email} *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jan@firma.sk"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-[#64748B]">{t.company} *</label>
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Firma s.r.o."
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-[#64748B]">{t.message}</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#DC2626]">
          {t.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-2xl bg-[#6D35F5] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9] disabled:opacity-60"
      >
        {status === 'submitting' ? t.submitting : t.submit}
      </button>
    </form>
  )
}
