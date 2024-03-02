import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  if (!title || !overview) return;

  const handlePlay = () => {
    navigate(`/movie/${id}`);
  };
  
  return (
    <div className="pt-[20%] px-6 md:px-12 absolute text-white flex flex-col w-full items-center md:items-start mt-[20%] md:mt-0">
      <div>
        <p className="text-2xl md:text-6xl font-bold">{title}</p>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      </div>
      <div className="flex">
        <button
          className="bg-white text-lg md:text-xl text-black font-bold rounded-lg px-3 md:px-12 py-2 md:py-4 hover:bg-opacity-80 mt-4 md:mt-0"
          onClick={handlePlay}>
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-lg md:text-xl text-white mx-2 font-bold rounded-lg px-3 md:px-12 py-2 md:py-4 bg-opacity-50 hover:bg-opacity-80 mt-4 md:mt-0">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
