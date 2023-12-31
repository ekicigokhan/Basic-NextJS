import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjc3MDFjMjIxOGE0ZGJjNmFlZWE3ZGNjZTFhOTdhMyIsInN1YiI6IjY1OTFiZDU1NGY5YTk5NzY1ZDc3MDdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G9XcC4DiUXbrPr6C6VO6XcWQY6DdFTPm1PfuoAujolo",
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {res?.results?.map((data, index) => (
        <Movies data={data} key={index} />
      ))}
    </div>
  );
};

export default Page;
