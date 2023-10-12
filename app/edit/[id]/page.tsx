'use client';

import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormPost from '@/app/components/FormPost';
import BackButton from '@/app/components/BackButton';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { reset } = useForm();

  const handleUpdatePost: SubmitHandler<InputType> = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-4 font-bold text-center'>Edit post</h1>
      <FormPost submit={handleUpdatePost} isEditing={true} />
    </div>
  );
};

export default Page;
