import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
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
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
