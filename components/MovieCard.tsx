import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

import FavoriteButton from './FavoriteButton';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );

  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className="
        duration
        h-[12vw]
        w-full
        cursor-pointer
        rounded-md
        object-cover
        shadow-xl
        transition
        delay-300
        group-hover:opacity-90
        sm:group-hover:opacity-0
      "
      />
      <div
        className="
        invisible
        absolute
        top-0
        z-10
        w-full
        scale-0
        opacity-0
        transition
        delay-300
        duration-200
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:scale-110
        group-hover:opacity-100
        sm:visible
      "
      >
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="
          duration
          h-[12vw]
          w-full
          cursor-pointer
          rounded-t-md
          object-cover
          shadow-xl
          transition
        "
        />
        <div
          className="
          absolute
          z-10
          w-full
          rounded-b-md
          bg-zinc-800
          p-2
          shadow-md
          transition
          lg:p-4
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
              flex 
              h-6 
              w-6 
              cursor-pointer 
              items-center 
              justify-center 
              rounded-full
               bg-white 
               transition
                hover:bg-neutral-300 
                lg:h-10 
                lg:w-10
                "
              onClick={() => router.push('/watch/${data?.id}')}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id} />
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-4 flex flex-row items-center gap-2">
            <p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
          </div>
          <div className="mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
            <p>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
