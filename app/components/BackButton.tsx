'use client';

import { NextPage } from 'next';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {}

const BackButton: NextPage<Props> = ({}) => {
  const router = useRouter();

  return (
    <button className="flex btn" onClick={() => router.back()}>
      <ChevronLeft /> Back
    </button>
  );
};

export default BackButton;
