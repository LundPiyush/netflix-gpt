import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id, isLarge, backdropPath }) => {
  if (!posterPath) return null;
  const imgPath = isLarge ? posterPath : backdropPath;
  console.log(imgPath);
  return (
    <Link to={`/movie/${id}`}>
      <div className="pr-4 w-36 md:w-48 transition-transform duration-450 hover:scale-105">
        <img
          src={IMG_CDN_URL + imgPath}
          //src="https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg"
          alt="movie"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
