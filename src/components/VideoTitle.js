import React from "react";

const VideoTitle = ({ title, overview }) => {
  if (!title || !overview) return;
  return (
    <div className="pt-[20%] px-6 md:px-12 absolute text-white">
      <p className="text-2xl md:text-6xl font-bold">{title}</p>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-lg md:text-xl text-black font-bold rounded-lg px-3 md:px-12 py-2 md:py-4 hover:bg-opacity-80 mt-4 md:mt-0">
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-xl text-white mx-2 font-bold rounded-lg px-12 p-4 bg-opacity-50 hover:bg-opacity-80 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
