'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import FormPost from '../components/FormPost';
import BackButton from '../components/BackButton';
import toast from 'react-hot-toast';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { reset } = useForm<InputType>();
  const router = useRouter();

  const handleCreatePost: SubmitHandler<InputType> = (data) => {
    createPost(data);

    reset();
  };

  const { mutate: createPost, isLoading: isCreating } = useMutation({
    mutationFn: (newPost: InputType) => {
      return axios.post('/api/posts/create', newPost);
    },

    onError: (error) => {
      console.log(error);
    },

    onSuccess: () => {
      router.push('/');
      toast.success('Post Created!!!');
      router.refresh();
    },
  });

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
      <FormPost isCreating={isCreating} submit={handleCreatePost} />
    </div>
  );
};

export default Page;
