// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          email: 'no-reply@christsvictoriousarmy.org',
          name: 'CV Army Website',
        },
        to: [{ email: 'ayomide@christsvictoriousarmy.org' }],
        subject: `New Contact Form Message from ${firstName} ${lastName}`,
        htmlContent: `
          <h3>New Message Received</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      },
      {
        headers: {
          'api-key': process.env.NEXT_BREVO_API_KEY as string,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );

    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
