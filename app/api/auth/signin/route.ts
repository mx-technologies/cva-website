import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken'; // Import JWT sign function

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find the user in the database
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create a session token (JWT)
    const token = sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1d', // Token expiration time
      }
    );

    return NextResponse.json({
      message: 'Login successful',
      user: { ...user, email: user.email, token },
    });
  } catch (error) {
    console.log(`[CONSOLE_SIGNIN]`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
