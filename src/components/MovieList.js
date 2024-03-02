import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 pb-2 md:px-6 md:pb-4 text-white ">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden webkit-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MovieList;
