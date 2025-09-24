// route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email, phone, church, referral, prayer } = body;

  console.log('BREVO KEY:', process.env.NEXT_BREVO_API_KEY);
  console.log('BREVO LIST:', process.env.NEXT_BREVO_LIST_ID);

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.NEXT_BREVO_API_KEY!,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      emailBlacklisted: false,
      attributes: {
        FIRSTNAME: fullName,
        PHONE: phone,
        CHURCH: church || '',
        REFERRAL: referral || '',
        PRAYER: prayer || '',
      },
      listIds: [parseInt(process.env.NEXT_BREVO_LIST_ID!, 10)],
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error('Brevo error:', error);

    return NextResponse.json(
      { error: error.message || 'Failed to register' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
