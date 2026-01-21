import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(req: Request) {
  const data = await req.json()

  const { firstName, lastName, email, phone, service, message } = data

  if (!firstName || !lastName || !email || !phone || !service || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: ['upnit.singh@gmail.com'],
    subject: `New Contact Request – ${service}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
