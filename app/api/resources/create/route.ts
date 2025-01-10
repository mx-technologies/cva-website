import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your project structure// Import your session management function
import { auth } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await auth(request); // Get the session to find the creatorId
    const { title, category, mediaArt, mediaUrl, messenger } =
      await request.json(); // Get the resource data from the request body

    // Validate input
    if (!title || !category || !mediaArt || !messenger) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Check if resource is unique
    const resource = await db.resource.findFirst({ where: { title } });

    if (resource) {
      return NextResponse.json(
        { message: 'Resource title exists' },
        { status: 400 }
      );
    }

    // Create a new resource
    const newResource = await db.resource.create({
      data: {
        title,
        category,
        mediaArt,
        mediaUrl,
        messenger,
        creatorId: session.userId, // Use the creatorId from the session
      },
    });

    return NextResponse.json(
      { message: 'Resource created successfully.', data: newResource },
      { status: 201 }
    ); // Return the created resource
  } catch (error) {
    console.log('[CREATE_RESOURCE]', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
