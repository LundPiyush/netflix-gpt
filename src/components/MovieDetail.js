import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { formatTime } from "../utils/formatTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faStar, faList, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../utils/constants";
import RecommendedMovies from "./RecommendedMovies";
import MovieCast from "./MovieCast";
import VideoBackground from "./VideoBackground";
import { toggleMovieTrailer } from "../utils/movieDetailsSlice/movieDetailsSlice";
import {
  addMovieInLikesList,
  addMovieInWatchList,
  removeMovieFromLikesList,
  removeMovieFromWatchList,
  addRating,
  resetRating,
} from "../utils/userSlice/userSlice";
import { findRating, isMovieInLikesList, isMovieInWatchlist } from "../utils/helper";
import { Tooltip } from "react-tooltip";
import { Rating } from "react-simple-star-rating";

const MovieDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { movieId } = useParams();
  useMovieDetails(movieId);
  const movie = useSelector((store) => store.movieDetails.selectedMovie);
  const playMovieTrailer = useSelector((store) => store.movieDetails.playMovieTrailer);
  const { watchList, likesList, ratings } = useSelector((store) => store.user);

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

  // toggle movie trailer
  const handlePlayTrailer = () => {
    dispatch(toggleMovieTrailer());
  };

  // add to watch list if movie is not present in watch list
  const addToWatchList = () => {
    if (!isMovieInWatchlist(watchList, movieId)) {
      dispatch(addMovieInWatchList(movie));
    } else {
      dispatch(removeMovieFromWatchList({ id: movieId }));
    }
  };

  // add to likes list if movie is not present in watch list
  const addToLikesList = () => {
    if (!isMovieInLikesList(likesList, movieId)) {
      dispatch(addMovieInLikesList(movie));
    } else {
      dispatch(removeMovieFromLikesList({ id: movieId }));
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
            <div className="flex my-4 md:my-10">
              <button className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11">
                <FontAwesomeIcon icon={faList} />
              </button>
              <Tooltip id="likes-icon" place="bottom" />
              <button
                data-tooltip-id="likes-icon"
                data-tooltip-content={isMovieInLikesList(likesList, movieId) ? "Dislike" : "Mark as favourite"}
                className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11"
                onClick={addToLikesList}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: isMovieInLikesList(likesList, movieId) ? "#E50914" : "#FFFFFF" }}
                />
              </button>
              <Tooltip id="bookmark-icon" place="bottom" />
              <button
                data-tooltip-id="bookmark-icon"
                data-tooltip-content={
                  isMovieInWatchlist(watchList, movieId) ? "Remove from watch list" : "Add to your watch list"
                }
                className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11"
                onClick={addToWatchList}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: isMovieInWatchlist(watchList, movieId) ? "#E50914" : "#FFFFFF" }}
                />
              </button>
              {!isOpen && <Tooltip id="star-icon" place="bottom" />}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                data-tooltip-id="star-icon"
                data-tooltip-content="Rate it!"
                className="mr-4 bg-gray-600 rounded-full w-8 h-8 md:w-11 md:h-11">
                <FontAwesomeIcon icon={faStar} />
              </button>

              {isOpen ? (
                <div className="relative">
                  <div className="absolute flex -bottom-8 md:-bottom-12 -left-16 md:-left-20 right-0 bg-gray-600 text-black min-w-44 md:min-w-48 md:p-2 rounded-lg">
                    <button className="px-2" onClick={() => dispatch(resetRating({ movie_id: id }))}>
                      <FontAwesomeIcon icon={faArrowsRotate} style={{ color: "#FFFFFF" }} />
                    </button>
                    <Rating
                      allowFraction
                      fillColor="orange"
                      iconsCount={5}
                      initialValue={findRating(ratings, id)}
                      onClick={(value) => dispatch(addRating({ movie_id: id, movie_rating: value }))}
                      emptyColor="white"
                      size={30}
                      SVGstyle={{ display: "inline" }}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className="text-lg md:text-xl italic truncate-ellipsis">{tagline}</p>
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
