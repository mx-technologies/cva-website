import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure // Import the getSession function
import { auth } from '@/lib/auth';
import { sign } from 'jsonwebtoken';

export async function POST(request: Request) {
  const decoded = auth(request);

  const { email } = await request.json(); // Get the new email from the request body

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  try {
    // Update the user's email in the database
    const user = await db.user.update({
      where: { id: decoded.userId }, // Assuming you have userId in the session
      data: { email },
    });

    // Create a session token (JWT)
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1d', // Token expiration time
      }
    );

    return NextResponse.json({
      message: 'Email updated successfully',
      user: { ...user, token },
    });
  } catch (error) {
    console.error('Error updating email:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
