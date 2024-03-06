import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { formatTime } from "../utils/formatTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faStar, faList } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../utils/constants";
import RecommendedMovies from "./RecommendedMovies";
import MovieCast from "./MovieCast";
import VideoBackground from "./VideoBackground";
import { toggleMovieTrailer } from "../utils/movieDetailsSlice";
import { addMovieInWatchList, removeMovieFromWatchList } from "../utils/userSlice";
import { isMovieInWatchlist } from "../utils/helper";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  useMovieDetails(movieId);
  const movie = useSelector((store) => store.movieDetails.selectedMovie);
  const playMovieTrailer = useSelector((store) => store.movieDetails.playMovieTrailer);
  const watchList = useSelector((store) => store.user.watchList);
  if (!movie) return;
  const {
    id,
    original_title,
    title,
    overview,
    backdrop_path,
    //imdb_id,
    //poster_path,
    release_date,
    tagline,
    runtime,
    genres,
  } = movie;
  const handlePlayTrailer = () => {
    dispatch(toggleMovieTrailer());
  };
  const addToWatchList = () => {
    // add to watch list if movie is not present in watch list
    if (!isMovieInWatchlist(watchList, movieId)) {
      dispatch(addMovieInWatchList(movie));
    } else {
      dispatch(removeMovieFromWatchList({ id: movieId }));
    }
  };
  return (
    <>
      <div className="h-full w-screen relative bg-black">
        {!playMovieTrailer && (
          <img
            alt={id}
            className="w-screen aspect-video md:h-[750px] h-96"
            //src="https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg"
            src={IMG_CDN_URL + backdrop_path}
          />
        )}
        {playMovieTrailer && <VideoBackground movieId={id} />}
        <div className="absolute top-36 text-white flex flex-col ml-10">
          <div>
            <p className="text-2xl md:text-6xl font-bold">{original_title || title}</p>
            <div className="flex mt-4">
              <p className="text-sm md:text-xl font-bold mr-2">{release_date} |</p>
              <p className="text-sm md:text-xl font-bold mr-2 hidden md:inline-block">
                {genres?.map((obj) => obj.name).join(", ")} |
              </p>
              <p className="text-sm md:text-xl font-bold mr-2">{formatTime(runtime)}</p>
            </div>
            <p className="text-sm md:text-xl font-bold md:hidden">{genres?.map((obj) => obj.name).join(", ")} </p>
            <div className="flex my-4">
              <button className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11">
                <FontAwesomeIcon icon={faList} />
              </button>
              <button className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11" onClick={addToWatchList}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: isMovieInWatchlist(watchList, movieId) ? "#E50914" : "#FFFFFF" }}
                />
              </button>
              <button className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11">
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
            <p className="text-lg md:text-xl italic">{tagline}</p>
            <div className="flex flex-col md:mt-4">
              <p className="text-lg md:text-xl font-bold hidden md:inline-block">Overview</p>
              <p className="hidden md:inline-block py-2 text-lg w-2/4">{overview}</p>
            </div>
          </div>
          <div className="flex md:mt-6">
            <button
              className="bg-white text-lg md:text-xl text-black font-bold rounded-lg px-3 md:px-12 py-2 md:py-4 hover:bg-opacity-80 mt-4 md:mt-0"
              onClick={handlePlayTrailer}>
              {!playMovieTrailer ? "▶️ Play Trailer" : "◼︎ Stop Trailer"}
            </button>
          </div>
        </div>
      </div>
      <MovieCast movieId={id} />
      <RecommendedMovies movieId={id} />
    </>
  );
};

export default MovieDetail;
