import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

// DELETE POST
interface contextProps {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, context: contextProps) {
  try {
    const { params } = context;

    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not delete post.' },
      { status: 500 }
    );
  }
}

// FETCH SINGLE POST BY ID
interface contextProps {
  params: {
    id: string;
  };
}

export async function GET(request: Request, context: contextProps) {
  try {
    const { params } = context;
    const post = await prisma.post.findFirst({
      where: {
        id: params.id,
      },
      include: {
        tag: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not update post' },
      { status: 500 }
    );
  }
}

// UPDATE POST
interface contextProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, context: contextProps) {
  try {
    const { params } = context;
    const { title, content, tagId } = await request.json();
    await prisma.post.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        content,
        tagId,
      },
    });

    return NextResponse.json({ message: 'update success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not update post' },
      { status: 500 }
    );
  }
}
