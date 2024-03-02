import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  // if there is no data in the store, return null
  if (!movies || !movies?.length) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  if (!original_title || !overview || !id) return;

  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
