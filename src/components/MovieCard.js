import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id, isLarge, backdropPath }) => {
  if (!posterPath) return null;
  const imgPath = isLarge ? posterPath : backdropPath;
  console.log(imgPath);
  return (
    <Link to={`/movie/${id}`}>
      <div
        className={`pr-4 transition-transform duration-450 hover:scale-105 ${
          isLarge ? "w-36 md:w-48" : "w-[12.5rem] md:w-64"
        }`}>
        <img
          className={isLarge ? "min-h-52" : "min-h-32"}
          src={IMG_CDN_URL + imgPath}
          //src="https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg"
          alt="movie"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
