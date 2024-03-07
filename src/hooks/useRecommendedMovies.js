import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../utils/movieDetailsSlice/movieDetailsSlice";

const useRecommendedMovies = (movieId) => {
  const dispatch = useDispatch();
  const getRecommendedMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
        API_OPTIONS
      );
      const recommendedMovies = await response.json();
      dispatch(addRecommendedMovies(recommendedMovies.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(
    () => {
      getRecommendedMovies();
    },
    // eslint-disable-next-line
    [movieId]
  );
};

export default useRecommendedMovies;
