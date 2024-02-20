import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  // fetch data from TMDM API and put it in the store
  const getNowPlayingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(
    () => {
      getNowPlayingMovies();
    },
    // eslint-disable-next-line
    []
  );
};

export default useNowPlayingMovies;
