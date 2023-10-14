'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
  submit: SubmitHandler<InputType>;
  isEditing?: boolean;
  isLoadingSubmit?: boolean;
  isLoadingUpdate?: boolean;
  initialValue?: InputType;
}

const FormPost: NextPage<Props> = ({
  submit,
  isEditing,
  isLoadingSubmit,
  isLoadingUpdate,
  initialValue,
}) => {
  const { register, handleSubmit } = useForm<InputType>({
    defaultValues: initialValue,
  });

  // fetch tags
  const { isLoading, data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const res = await axios.get('/api/tags');
      return res.data;
    },
  });

  const setLoader =
    isLoadingSubmit || isLoadingUpdate ? (
      <>
        <span className='loading loading-spinner loading-sm'></span>
        {isLoadingSubmit ? 'Creating...' : 'Updating...'}
      </>
    ) : isEditing ? (
      'UPDATE'
    ) : (
      'SUBMIT'
    );

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        {...register('title', { required: true })}
        type='text'
        placeholder='Post title'
        className='input input-bordered w-full max-w-lg'
      />
      <textarea
        {...register('content', { required: true })}
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='Post content'
      ></textarea>

      {isLoading ? (
        <span className='loading loading-dots loading-md'></span>
      ) : (
        <select
          {...register('tagId', { required: true })}
          className='select select-bordered w-full max-w-lg'
        >
          <option value={''}>Select a Tag?</option>

          {tags?.map((tag: any) => {
            return (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            );
          })}
        </select>
      )}

      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        {setLoader}
      </button>
    </form>
  );
};

export default FormPost;
