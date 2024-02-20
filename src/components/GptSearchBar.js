import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form className="bg-black">
        <input type="text" placeholder="Search for a movie" className="p-4 m-4" />
        <button className="py-2 px-4 bg-red-500 text-white rounded-lg">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
