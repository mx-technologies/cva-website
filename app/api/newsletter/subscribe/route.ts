import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure

export async function POST(request: Request) {
  try {
    const { email } = await request.json(); // Get the email from the request body

    // Validate the email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    // Check if the email is already subscribed
    const existingSubscription = await db.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      return NextResponse.json(
        { message: 'Email is already subscribed' },
        { status: 409 }
      );
    }

    // Create a new subscription
    await db.newsletterSubscription.create({
      data: { email },
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.log(`[SUBSCRIBE_TO_NEWSLETTER]`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
