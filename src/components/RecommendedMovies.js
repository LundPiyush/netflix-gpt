import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const RecommendedMovies = ({ movieId }) => {
  useRecommendedMovies(movieId);
  const recommendedMovies = useSelector((store) => store.movieDetails.recommendedMovies);
  if (!recommendedMovies) return null;
  return (
    <div className="bg-black">
      <MovieList title="Recommendations" movies={recommendedMovies} />
    </div>
  );
};

export default RecommendedMovies;
