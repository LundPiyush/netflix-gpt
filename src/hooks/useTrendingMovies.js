import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const getTrendingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US", API_OPTIONS);
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };
  useEffect(
    () => {
      !trendingMovies.length && getTrendingMovies();
    }, // eslint-disable-next-line
    []
  );
};
export default useTrendingMovies;
