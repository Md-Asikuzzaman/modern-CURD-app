'use client';

import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormPost from '../components/FormPost';
import BackButton from '../components/BackButton';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { reset } = useForm();

  const handleCreatePost: SubmitHandler<InputType> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default Page;
