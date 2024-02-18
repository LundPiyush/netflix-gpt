import React from "react";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
      <img
        // src = {IMG_BASE_URL + posterPath}
        src="https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg"
        alt="movie"
      />
    </div>
  );
};

export default MovieCard;
