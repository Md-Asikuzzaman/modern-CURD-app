import { Trash, Pencil } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';

interface Props {}

const ButtonActions: NextPage<Props> = ({}) => {
  return (
    <div className='flex items-center gap-3'>
      <Link className='btn btn-primary' href={'/edit/1'}>
        <Pencil />
        Edit
      </Link>
      <button className='btn btn-error'>
        <Trash /> Delete
      </button>
    </div>
  );
};

export default ButtonActions;
