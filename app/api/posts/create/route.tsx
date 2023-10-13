import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, content, tag } = await req.json();

    const data = await prisma.post.create({
      data: {
        title,
        tagId: tag,
        content,
      },
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
