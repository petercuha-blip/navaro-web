import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#111827;">
        <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:24px 32px;border-radius:12px 12px 0 0;">
          <div style="font-size:18px;font-weight:800;color:#fff;">Navaro – Nová žiadosť o beta prístup</div>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-size:13px;color:#6b7280;width:140px;">Meno</td><td style="padding:8px 0;font-size:15px;font-weight:600;color:#111827;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-size:13px;color:#6b7280;">Email</td><td style="padding:8px 0;font-size:15px;font-weight:600;color:#4f46e5;"><a href="mailto:${escapeHtml(email)}" style="color:#4f46e5;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-size:13px;color:#6b7280;">Firma</td><td style="padding:8px 0;font-size:15px;font-weight:600;color:#111827;">${escapeHtml(company)}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;font-size:13px;color:#6b7280;vertical-align:top;">Správa</td><td style="padding:8px 0;font-size:15px;color:#374151;">${escapeHtml(message)}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px;padding:16px;background:#f5f3ff;border-radius:8px;font-size:13px;color:#5b21b6;">
            Vytvor beta pozvánku v admin paneli: <a href="https://admin.navaro.pro/beta-invites" style="color:#4f46e5;">admin.navaro.pro/beta-invites</a>
          </div>
        </div>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Navaro Web <noreply@navaro.pro>',
        to: ['peter.cuha@gmail.com'],
        reply_to: email,
        subject: `Beta žiadosť: ${company} (${name})`,
        html,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return NextResponse.json({ error: data?.message || 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
