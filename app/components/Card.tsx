import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const Card: NextPage<Props> = ({}) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <Link href={'/blog/1'} className='btn btn-primary'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
