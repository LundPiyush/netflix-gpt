import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  // fetch data from TMDM API and put it in the store
  const getPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(
    () => {
      getPopularMovies();
    },
    // eslint-disable-next-line
    []
  );
};

export default usePopularMovies;
