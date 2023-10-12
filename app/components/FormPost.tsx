'use client';

import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  submit: SubmitHandler<InputType>;
}

const FormPost: NextPage<Props> = ({ submit }) => {
  const { register, handleSubmit } = useForm<InputType>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        {...register('title')}
        type='text'
        placeholder='Post title'
        className='input input-bordered w-full max-w-lg'
      />
      <textarea
        {...register('content')}
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='Post content'
      ></textarea>

      <select
        {...register('tag')}
        className='select select-bordered w-full max-w-lg'
      >
        <option value={''}>Select a Tag?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        CREATE
      </button>
    </form>
  );
};

export default FormPost;
