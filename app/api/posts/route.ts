import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// FETCH POSTS
export async function GET() {
  const res = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
      createdAt: true,
      updatedAt: true,
    },

    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(res, { status: 200 });
}

// CREATE NEW POST
export async function POST(request: Request) {
  try {
    const { title, content, tagId } = await request.json();

    const data = await prisma.post.create({
      data: {
        title,
        tagId,
        content,
      },
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not cerate post' },
      { status: 500 }
    );
  }
}
