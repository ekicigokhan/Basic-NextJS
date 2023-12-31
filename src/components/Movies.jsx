"use client";
import Image from "next/image";
import React from "react";

const Movies = ({ data }) => {
  return (
    <div className="min-w-[450px] relative">
      <Image
        width={450}
        height={300}
        src={`https://image.tmdb.org/t/p/w500/${
          data?.poster_path || data.backdrop_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-80 transition-opacity">
        <div className="text-2xl font-bold cursor-pointer">{data.title}</div>
        <div>
          {data.release_date} - {data.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
