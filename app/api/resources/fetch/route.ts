import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category'); // Get the category from query parameters

  // Fetch resources, optionally filtering by category
  const resources = await db.resource.findMany({
    where: category ? { category } : undefined, // Filter by category if provided
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      creator: {
        select: {
          email: true, // Include only the email of the creator
        },
      },
    },
  });

  return NextResponse.json(resources, { status: 200 });
}
