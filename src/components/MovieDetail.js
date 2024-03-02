import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { formatTime } from "../utils/formatTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faStar, faList } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const { movieId } = useParams();

  useMovieDetails(movieId);
  const movie = useSelector((store) => store.movieDetails.selectedMovie);
  console.log("movie", movie);
  if (!movie) return;
  const {
    id,
    original_title,
    title,
    overview,
    //backdrop_path,
    //imdb_id,
    poster_path,
    release_date,
    tagline,
    runtime,
    genres,
  } = movie;
  return (
    <div className="h-full w-screen relative bg-black">
      <img alt={id}
        className="h-screen	w-screen object-cover"
        //src="https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg"
        src={poster_path}
      />
      <div className="absolute top-36 text-white flex flex-col w-full mx-10">
        <div>
          <p className="text-2xl md:text-6xl font-bold">{original_title || title}</p>
          <div className="flex mt-4">
            <p className="text-lg md:text-xl font-bold mr-4">• {release_date}</p>
            <p className="text-lg md:text-xl font-bold mr-4">• {genres.map((obj) => obj.name).join(", ")}</p>
            <p className="text-lg md:text-xl font-bold mr-4">• {formatTime(runtime)}</p>
          </div>
          <div className="flex my-4 ">
            <button className="mr-4 bg-gray-600 rounded-full w-11 h-11">
                <FontAwesomeIcon icon={faList}  />
            </button>
            <button className="mr-4 bg-gray-600 rounded-full w-11 h-11">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="mr-4 bg-gray-600 rounded-full w-11 h-11">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <button className="mr-4 bg-gray-600 rounded-full w-11 h-11">
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>
          <p className="text-lg md:text-xl italic">{tagline}</p>
          <div className="flex flex-col mt-4">
            <p className="text-lg md:text-xl font-bold">Overview</p>
            <p className="hidden md:inline-block py-2 text-lg w-2/4">{overview}</p>
          </div>
        </div>
        <div className="flex">
          <button className="bg-white text-lg md:text-xl text-black font-bold rounded-lg px-3 md:px-12 py-2 md:py-4 hover:bg-opacity-80 mt-4 md:mt-0">
            ▶️ Play Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
