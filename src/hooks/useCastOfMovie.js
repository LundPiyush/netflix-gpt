import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCastOfMovie } from "../utils/movieDetailsSlice/movieDetailsSlice";

const useCastOfMovie = (movieId) => {
  const dispatch = useDispatch();
  const getMovieCast = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS);
      const movieCast = await response.json();
      dispatch(addCastOfMovie(movieCast?.cast));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(
    () => {
      getMovieCast();
    },
    // eslint-disable-next-line
    [movieId]
  );
};

export default useCastOfMovie;
