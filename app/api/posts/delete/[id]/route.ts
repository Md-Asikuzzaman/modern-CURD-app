import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: 'Post Deleted!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
