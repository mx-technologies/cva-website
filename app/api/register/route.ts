// route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email, phone, church, city, location, referral, prayer, freeTransportation, pickupBusStop, volunteering, volunteeringCategory } = body;

  const apiKey = process.env.NEXT_BREVO_API_KEY || '';
  if (apiKey.startsWith('xsmtpsib-')) {
    console.error('Brevo API Error: NEXT_BREVO_API_KEY in .env is an SMTP key ("xsmtpsib-..."). Brevo REST API requires an API key starting with "xkeysib-...". Generate one at Brevo Dashboard -> SMTP & API -> API Keys.');
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email,
      emailBlacklisted: false,
      attributes: {
        ...(fullName && { FIRSTNAME: fullName }),
        ...(phone && { PHONE: phone }),
        ...(church && { CHURCH: church || '' }),
        ...(city && { CITY: city || '' }),
        ...(location && { LOCATION: location || '' }),
        ...(referral && { REFERRAL: referral || '' }),
        ...(prayer && { PRAYER: prayer || '' }),
        ...(freeTransportation && { FREE_TRANSPORTATION: freeTransportation || '' }),
        ...(pickupBusStop && { PICKUP_BUS_STOP: pickupBusStop || '' }),
        ...(volunteering && { VOLUNTEERING: volunteering || '' }),
        ...(volunteeringCategory && { VOLUNTEERING_CATEGORY: volunteeringCategory || '' }),
      },
      listIds: [parseInt(process.env.NEXT_BREVO_LIST_ID || '3', 10)],
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error('Brevo Error:', error);

    const errorMessage = apiKey.startsWith('xsmtpsib-')
      ? 'Brevo API Key error: NEXT_BREVO_API_KEY in .env is an SMTP Key (xsmtpsib-). Please replace it with a Brevo v3 API Key (xkeysib-) from Brevo Dashboard -> SMTP & API -> API Keys.'
      : (error.message || 'Failed to register');

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }

  // Send confirmation email
  try {
    let summaryItemsHtml = `
      <div class="summary-item">
        <span class="summary-label">Name:</span>
        <span class="summary-value">${fullName || 'N/A'}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Email:</span>
        <span class="summary-value">${email}</span>
      </div>
    `;

    if (phone) {
      summaryItemsHtml += `
        <div class="summary-item">
          <span class="summary-label">Phone:</span>
          <span class="summary-value">${phone}</span>
        </div>
      `;
    }

    if (church) {
      summaryItemsHtml += `
        <div class="summary-item">
          <span class="summary-label">Church:</span>
          <span class="summary-value">${church}</span>
        </div>
      `;
    }

    const locationString = [city, location].filter(Boolean).join(', ');
    if (locationString) {
      summaryItemsHtml += `
        <div class="summary-item">
          <span class="summary-label">Location:</span>
          <span class="summary-value">${locationString}</span>
        </div>
      `;
    }

    if (freeTransportation === 'yes' || freeTransportation === 'true' || freeTransportation === true) {
      summaryItemsHtml += `
        <div class="summary-item">
          <span class="summary-label">Transportation:</span>
          <span class="summary-value">Free pickup requested ${pickupBusStop ? `(Bus Stop: ${pickupBusStop})` : ''}</span>
        </div>
      `;
    }

    if (volunteering === 'yes' || volunteering === 'true' || volunteering === true) {
      summaryItemsHtml += `
        <div class="summary-item">
          <span class="summary-label">Volunteering:</span>
          <span class="summary-value">Yes ${volunteeringCategory ? `(${volunteeringCategory})` : ''}</span>
        </div>
      `;
    }

    let prayerRequestHtml = '';
    if (prayer) {
      prayerRequestHtml = `
        <p><strong>Your Prayer Request:</strong><br/>
        <span style="font-style: italic; color: #555555;">"${prayer}"</span></p>
        <p>Our prayer team has received your request and will be praying for you.</p>
      `;
    }

    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.NEXT_BREVO_API_KEY!,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: {
          email: 'no-reply@christsvictoriousnation.org',
          name: "Christ's Victorious Nation",
        },
        to: [{ email, name: fullName || '' }],
        subject: "Welcome to Christ's Victorious Nation!",
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to Christ's Victorious Nation</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background-color: #f7f7f7;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
              }
              .wrapper {
                width: 100%;
                background-color: #f7f7f7;
                padding: 20px 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              }
              .header {
                background: linear-gradient(135deg, #a81c1c 0%, #7f1212 100%);
                color: #ffffff;
                padding: 30px 20px;
                text-align: center;
              }
              .logo-container {
                margin-bottom: 10px;
                text-align: center;
              }
              .logo {
                width: 70px;
                height: 70px;
                object-fit: contain;
                display: inline-block;
                filter: brightness(0) invert(1);
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
                letter-spacing: 0.5px;
              }
              .header p {
                margin: 5px 0 0 0;
                font-size: 14px;
                opacity: 0.9;
              }
              .content {
                padding: 30px 25px;
                color: #333333;
                line-height: 1.6;
              }
              .content h2 {
                font-size: 18px;
                margin-top: 0;
                color: #7f1212;
              }
              .summary-card {
                background-color: #fcfcfc;
                border: 1px solid #eeeeee;
                border-radius: 6px;
                padding: 15px;
                margin: 20px 0;
              }
              .summary-item {
                margin-bottom: 8px;
                font-size: 14px;
              }
              .summary-item:last-child {
                margin-bottom: 0;
              }
              .summary-label {
                font-weight: bold;
                color: #666666;
                display: inline-block;
                width: 150px;
              }
              .summary-value {
                color: #111111;
              }
              .footer {
                background-color: #f1f1f1;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #777777;
                border-top: 1px solid #eeeeee;
              }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <div class="logo-container">
                    <img src="https://christsvictoriousnation.org/logo.png" alt="Logo" class="logo" />
                  </div>
                  <h1>Christ's Victorious Nation</h1>
                  <p>Registration Confirmation</p>
                </div>
                <div class="content">
                  <h2>Hello ${fullName || 'there'},</h2>
                  <p>Thank you for registering! We are thrilled to welcome you to Christ's Victorious Nation. Your details have been successfully received and processed.</p>
                  
                  <div class="summary-card">
                    ${summaryItemsHtml}
                  </div>
                  
                  ${prayerRequestHtml}

                  <p>If you have any questions or need to make changes to your registration details, please feel free to reply directly to this email or get in touch with us.</p>
                  
                  <p>Blessings,<br/><strong>Christ's Victorious Nation Team</strong></p>
                </div>
                <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Christ's Victorious Nation. All rights reserved.</p>
                  <p>You received this email because you registered on our website.</p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!emailRes.ok) {
      const emailErr = await emailRes.json().catch(() => ({}));
      console.error('Failed to send confirmation email via Brevo:', emailErr);
    }
  } catch (err) {
    console.error('Error sending confirmation email:', err);
  }

  return NextResponse.json({ success: true });
}
