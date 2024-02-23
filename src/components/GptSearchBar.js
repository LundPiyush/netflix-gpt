import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  console.log(language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black  w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10 rounded-lg"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-2 m-4">{lang[language].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
