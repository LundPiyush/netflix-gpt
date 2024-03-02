import React from "react";
import user_image from "../assets/user_image.svg";
import { IMG_CDN_URL } from "../utils/constants";

const CastCard = ({ id, profilePath, name, character }) => {
  return (
    <div className="mx-2 my-4 pb-4 w-36 md:w-48 flex flex-col overflow-x-hidden webkit-scrollbar bg-white transition-transform duration-450 hover:scale-105 rounded-lg">
      <img
        className={profilePath ? "bg-gray-500" : "bg-gray-500 min-h-56"}
        src={profilePath ? IMG_CDN_URL + profilePath : user_image}
        //src={user_image}
        alt={"cast" + id}
      />
      <div className="text-black flex flex-col my-4 mx-2">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
