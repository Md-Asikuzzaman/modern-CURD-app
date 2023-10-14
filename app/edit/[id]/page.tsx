'use client';

import { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import FormPost from '@/app/components/FormPost';
import BackButton from '@/app/components/BackButton';

interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const { data: post, isLoading } = useQuery({
    queryKey: ['posts', id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate: updatePost, isLoading: isLoadingUpdate } = useMutation({
    mutationFn: (updatePost: InputType) => {
      return axios.patch(`/api/posts/${id}`, updatePost);
    },

    onError: (error) => {
      console.log(error);
    },

    onSuccess: () => {
      router.push('/');
      toast.success('Post Updated!!!');
      router.refresh();
    },
  });

  const handleUpdatePost: SubmitHandler<InputType> = (data) => {
    updatePost(data);
  };

  if (isLoading) {
    return (
      <div className='h-48 flex items-center justify-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl py-4 font-bold text-center'>Edit post</h1>
      <FormPost
        submit={handleUpdatePost}
        initialValue={post}
        isLoadingUpdate={isLoadingUpdate}
        isEditing={true}
      />
    </div>
  );
};

export default Page;
