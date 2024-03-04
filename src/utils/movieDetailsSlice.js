import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    selectedMovie: null,
    recommendedMovies: [],
    castOfMovie: [],
    playMovieTrailer: false,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    addCastOfMovie: (state, action) => {
      state.castOfMovie = action.payload;
    },
    toggleMovieTrailer: (state) => {
      state.playMovieTrailer = !state.playMovieTrailer;
    },
  },
});

export const { addMovieDetails, addRecommendedMovies, addCastOfMovie, toggleMovieTrailer } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
