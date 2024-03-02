import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    selectedMovie: null,
    recommendedMovies: [],
    castOfMovie: [],
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
  },
});

export const { addMovieDetails, addRecommendedMovies, addCastOfMovie } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
