import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (
    !movies?.nowPlayingMovies?.length ||
    !movies?.popularMovies?.length ||
    !movies?.upcomingMovies?.length ||
    !movies?.trendingMovies?.length
  )
    return null;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-64 relative z-20 pl-2 md:pl-6">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Trending Now" movies={movies?.trendingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming Now" movies={movies?.upcomingMovies} />
        <MovieList title="Comedy" movies={movies?.nowPlayingMovies} />
      </div>
      {/*
        MovieList - Popular
          -MovieCard *n
  
        MovieList - Now playing
        MovieList - Trending 
        MovieList - Comedy
       */}
    </div>
  );
};

export default SecondaryContainer;
