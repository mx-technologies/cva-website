import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category'); // Get the category from query parameters
  const searchQuery = searchParams.get('search'); // Get the search query from query parameters

  // Build the where clause for the database query
  const whereClause: any = {};
  if (category) {
    whereClause.category = category; // Filter by category if provided
  }
  if (searchQuery) {
    whereClause.title = {
      contains: searchQuery, // Search for titles containing the search query
      mode: 'insensitive', // Case insensitive search
    };
  }

  // Fetch resources, optionally filtering by category and search query
  const resources = await db.resource.findMany({
    where: whereClause,
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
