import React from 'react';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className=" col-span group relative h-[12vw] bg-zinc-900">
      <img
        className="
       duration
       group-hover:
       h-[12vw]
       w-full
       cursor-pointer
       rounded-md
       object-cover opacity-0
       shadow-xl
       transition
       delay-300
      "
        src={data.thumbnaiUrl}
        alt="Thumbnail"
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
      "
      />
      <img
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
        src={data.thumbnaiUrl}
        alt="Thumbnail"
      />
      <div
        className="absolute
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
        <div className=" flex flex-row items-center gap-3">
          <div
            className=" flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
