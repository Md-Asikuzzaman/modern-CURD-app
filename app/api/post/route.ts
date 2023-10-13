import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET() {
  const res = await prisma.post.findMany();

  return NextResponse.json(res, { status: 200 });
}

export async function POST(response: Response, request: Request) {
  const { title, content, tag } = await response.json();

  const res = await prisma.post.create({
    data: {
      title,
      content,
      tag,
    },
  });

  return NextResponse.json("sd", { status: 201 });
}
