import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getTrailerOfMovie = async (movieId) => {
    try {
      // fetch the movie trailer by using movie Id and put the trailer data in the store
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const allMovieVideos = await response.json();
      const movieTrailersList = allMovieVideos?.results.filter(({ type }) => type === "Trailer");
      const movieTrailer = movieTrailersList.length ? movieTrailersList[0] : allMovieVideos?.results[0];
      dispatch(addTrailerVideo(movieTrailer));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(
    () => {
      !trailerVideo && getTrailerOfMovie(movieId);
    },
    // eslint-disable-next-line
    []
  );
};

export default useMovieTrailer;
