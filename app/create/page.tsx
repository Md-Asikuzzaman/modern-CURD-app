import { NextPage } from 'next';
import FormPost from '../components/FormPost';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
      <FormPost />
    </div>
  );
};

export default Page;
