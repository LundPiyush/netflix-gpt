import React from "react";
import useCastOfMovie from "../hooks/useCastOfMovie";
import { useSelector } from "react-redux";
import CastCard from "./CastCard";

const MovieCast = ({ movieId }) => {
  useCastOfMovie(movieId);
  const movieCast = useSelector((store) => store.movieDetails.castOfMovie);
  if (!movieCast?.length) return null;
  return (
    <div className="px-2 pb-2 md:px-6 md:pb-4 text-white bg-black">
      <h1 className="text-lg md:text-3xl py-4">Top Billed Cast</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden webkit-scrollbar">
        <div className="flex">
          {movieCast?.map((cast) => (
            <CastCard
              key={cast?.id}
              id={cast?.id}
              profilePath={cast?.profile_path}
              name={cast?.original_name}
              character={cast?.character}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
