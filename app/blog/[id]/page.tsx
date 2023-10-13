import BackButton from '@/app/components/BackButton';
import ButtonActions from '@/app/components/ButtonActions';
import prisma from '@/app/lib/prisma';
import { NextPage } from 'next';

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { id } = params;

  const post = await prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return (
    <div>
      <BackButton />
      <div className="flex items-center justify-between mt-5">
        <h2 className='text-2xl font-bold'>{post?.title}</h2>
        <ButtonActions id={post?.id} />
      </div>
      <p className='text-slate-600 my-10'>{post?.content}</p>
      <p className='badge badge-ghost'>{post?.tag?.name}</p>
    </div>
  );
};

export default Page;
