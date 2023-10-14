'use client';

import { Trash, Pencil } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
interface Props {
  id: string | any;
}

const ButtonActions: NextPage<Props> = ({ id }) => {
  const router = useRouter();

  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: (id) => {
      return axios.delete(`/api/posts/${id}`);
    },

    onError: (error) => {
      console.log(error);
    },

    onSuccess: () => {
      router.push('/');
      toast.success('Post Deleted!!!');
      router.refresh();
    },
  });

  return (
    <div className='flex items-center gap-3'>
      <Link className='btn btn-primary' href={`/edit/${id}`}>
        <Pencil />
        Edit
      </Link>
      <button onClick={() => deletePost(id)} className='btn btn-error'>
        {isLoading && <span className='loading loading-spinner'></span>}

        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <Trash /> Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonActions;
