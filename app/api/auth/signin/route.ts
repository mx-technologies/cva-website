import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 400 }
      );
    }

    // Set a cookie with user information
    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('user', JSON.stringify({ email: user.email }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    console.log(`[CONSOLE_SIGNIN]`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
