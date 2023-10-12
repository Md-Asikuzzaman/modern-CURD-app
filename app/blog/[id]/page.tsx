import BackButton from '@/app/components/BackButton';
import ButtonActions from '@/app/components/ButtonActions';
import { NextPage } from 'next';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <BackButton />
      <h2 className='text-2xl font-bold my-4'>Post Title</h2>
      <ButtonActions />
      <p className='text-slate-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptates cum sapiente libero officia ullam necessitatibus facere
        facilis temporibus odit?
      </p>
    </div>
  );
};

export default Page;
