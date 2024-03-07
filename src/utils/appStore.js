import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import moviesReducer from "./moviesSlice/moviesSlice";
import gptReducer from "./gptSlice/gptSlice";
import configReducer from "./configSlice/configSlice";
import movieDetailsReducer from "./movieDetailsSlice/movieDetailsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default appStore;
