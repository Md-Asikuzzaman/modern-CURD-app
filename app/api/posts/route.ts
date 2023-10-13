import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

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
