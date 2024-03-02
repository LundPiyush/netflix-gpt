import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    selectedMovie: null,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { addMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
