import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoggedIn: null,
    watchList: [],
    likesList: [],
    ratings: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    removeUser: (state) => {
      state.userLoggedIn = null;
    },
    addMovieInWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeMovieFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(({ id }) => id !== Number(action.payload.id));
    },
    addMovieInLikesList: (state, action) => {
      state.likesList.push(action.payload);
    },
    removeMovieFromLikesList: (state, action) => {
      state.likesList = state.likesList.filter(({ id }) => id !== Number(action.payload.id));
    },
    addRating: (state, action) => {
      const { movie_rating, movie_id } = action.payload;
      const existingRatingIndex = state.ratings.findIndex(({ movieId }) => movieId === movie_id);

      if (existingRatingIndex !== -1) {
        // Update the rating if movie ID already exists
        state.ratings[existingRatingIndex].rating = movie_rating;
      } else {
        // Add new rating if movie ID doesn't exist
        state.ratings.push({ rating: movie_rating, movieId: movie_id });
      }
    },
    resetRating: (state, action) => {
      const { movie_id } = action.payload;
      const existingRatingIndex = state.ratings.findIndex(({ movieId }) => movieId === movie_id);

      if (existingRatingIndex !== -1) {
        // Update the rating to 0 if movie ID already exists
        state.ratings[existingRatingIndex].rating = 0;
      }
    },
  },
});

export const {
  addUser,
  removeUser,
  addMovieInWatchList,
  removeMovieFromWatchList,
  addMovieInLikesList,
  removeMovieFromLikesList,
  addRating,
  resetRating,
} = userSlice.actions;

export default userSlice.reducer;
