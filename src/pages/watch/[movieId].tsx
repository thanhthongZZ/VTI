import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import useMovie from '@/hooks/useMovie';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
console.log(router.query)
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-4">
        <AiOutlineArrowLeft
          onClick={() => router.push('/')}
          className="w-4 cursor-pointer text-white transition hover:opacity-80 md:w-10"
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video className="h-full w-full" autoPlay controls src={data?.videoUrl} />
    </div>
  );
};

export default Watch;
