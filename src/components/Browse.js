import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import MovieDetail from "./MovieDetail";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const showMovieDetailPage = useSelector((store) => store.movieDetails.selectedMovie);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      {/*
      MainContainer
          -VideoBackground   
          - VideoTitle 
      SeondaryContainer
          - MovieList * n
              - Cards * n 
       */}

      {showMovieDetailPage ? (
        <MovieDetail />
      ) : showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
