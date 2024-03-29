import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return null;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video h-[26em] md:h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=08Y17jgSlT6i_H-Q&autoplay=1&mute=1&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>  
  );
};

export default VideoBackground;
