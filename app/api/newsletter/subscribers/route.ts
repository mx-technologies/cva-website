import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure

export async function GET() {
  try {
    // Fetch all subscribers from the database
    const subscribers = await db.newsletterSubscription.findMany();

    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { message: 'Error fetching subscribers' },
      { status: 500 }
    );
  }
}
