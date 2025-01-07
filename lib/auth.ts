import { UserProps } from '@/redux/store/slices/authSlice';
import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const auth = (request: Request): any => {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const decoded = verify(token, process.env.JWT_SECRET!);

  if (!decoded) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return decoded;
};
