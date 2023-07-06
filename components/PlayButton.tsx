import { useRouter } from 'next/router';
import React from 'react';
import { BsFillPlayBtnFill } from 'react-icons/bs';

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        flex 
        w-auto 
        flex-row items-center 
        rounded-md bg-white
        px-2 
        py-1 text-xs 
        font-semibold
        transition
        hover:bg-neutral-300
        md:px-4
        md:py-2
        lg:text-lg
        "
    >
      <BsFillPlayBtnFill className="mr-1 w-4 text-black md:w-7" />
      Play
    </button>
  );
};
export default PlayButton;
