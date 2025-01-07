import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure
import bcrypt from 'bcrypt';
import { auth } from '@/lib/auth'; // Import the getSession function

export async function POST(request: Request) {
  const decoded = auth(request); // Get the decoded data

  const { currentPassword, newPassword, newPasswordConfirmation } =
    await request.json(); // Get the current and new passwords

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { message: 'Current and new passwords are required' },
      { status: 400 }
    );
  }

  // Find the user in the database
  const user = await db.user.findUnique({ where: { id: decoded.userId } });
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  // Check if the current password is correct
  const isValidPassword = await bcrypt.compare(currentPassword, user.password);
  if (!isValidPassword) {
    return NextResponse.json(
      { message: 'Current password is incorrect' },
      { status: 400 }
    );
  }

  // Check if new password is confirmed
  if (newPassword !== newPasswordConfirmation) {
    return NextResponse.json(
      { message: 'Passwords do not match' },
      { status: 400 }
    );
  }

  // Hash the new password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password in the database
  await db.user.update({
    where: { id: user.id },
    data: { password: hashedNewPassword },
  });

  return NextResponse.json({ message: 'Password updated successfully' });
}
