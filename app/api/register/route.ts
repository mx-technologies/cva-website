// route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email, phone, church, referral, prayer } = body;

  console.log(process.env.NEXT_BREVO_API_KEY);
  console.log(process.env.NEXT_BREVO_LIST_ID);

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.NEXT_BREVO_API_KEY!,
    },
    body: JSON.stringify({
      emailBlacklisted: false,
      email,
      attributes: {
        FIRSTNAME: fullName,
        LANDLINE_NUMBER: phone,
        CHURCH: church || '',
        REFERRAL: referral || '',
        PRAYER: prayer || '',
      },
      listIds: [parseInt(process.env.NEXT_BREVO_LIST_ID!)],
      updateEnabled: true,
      smtpBlacklistSender: [],
    }),
  });

  if (!res.ok) {
    console.log(res);

    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
