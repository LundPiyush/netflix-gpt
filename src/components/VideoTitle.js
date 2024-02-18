import React from "react";

const VideoTitle = ({ title, overview }) => {
  if (!title || !overview) return;
  return (
    <div className="pt-[20%] px-12 absolute text-white">
      <p className="text-6xl font-bold">{title}</p>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-xl text-black font-bold rounded-lg px-12 p-4 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-xl text-white mx-2 font-bold rounded-lg px-12 p-4 bg-opacity-50 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
