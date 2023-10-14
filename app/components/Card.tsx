import { Tag } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
interface Props {
  post: {
    id: string;
    title: string;
    content: string;
    createdAt: true;
    updatedAt: true;
    tag: Tag;
  };
}

const Card: NextPage<Props> = ({ post }) => {
  const { id, title, content, tag } = post;

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='climb'>{content}</p>

        <p className='badge badge-ghost'>{tag.name}</p>
        <div className='card-actions justify-end'>
          <Link href={`/blog/${id}`} className='btn btn-primary'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
