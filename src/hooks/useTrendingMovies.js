import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };
  useEffect(
    () => {
      getTrendingMovies();
    }, // eslint-disable-next-line
    []
  );
};
export default useTrendingMovies;
