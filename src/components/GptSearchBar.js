import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openAI";
import { API_OPTIONS, BARD_KEY } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const genAI = new GoogleGenerativeAI(BARD_KEY);
  const handleGPTSearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = await response.text();
    const movies = text.split(",");
    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResults({ movieNames: movies, movieResults: tmdbResults }));
    /*
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // Make an API call to GPT API and get movies results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) return;
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie we will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // return an array of promises - [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdbResults", tmdbResults);
    dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));
    */
  };
  const language = useSelector((store) => store.config.language);
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full flex flex-col md:w-1/2 md:grid md:grid-cols-12 m-4"
        onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10 rounded-lg focus:outline-none"
          ref={searchText}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-2 m-4 min-h-12"
          onClick={handleGPTSearchClick}>
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
