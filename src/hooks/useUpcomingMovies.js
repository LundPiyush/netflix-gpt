import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  // fetch data from TMDM API and put it in the store
  const getUpcomingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(
    () => {
      !upcomingMovies.length && getUpcomingMovies();
    },
    // eslint-disable-next-line
    []
  );
};

export default useUpcomingMovies;
