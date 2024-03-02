import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieDetailsSlice";
import { useEffect } from "react";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    try {
      // fetch the movie details using movieId and put it in the store
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
      const movieDetails = await response.json();
      dispatch(addMovieDetails(movieDetails));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);
};
export default useMovieDetails;
