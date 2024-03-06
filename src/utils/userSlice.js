import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoggedIn: null,
    watchList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    removeUser: (state, action) => {
      state.userLoggedIn = null;
    },
    addMovieInWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeMovieFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(({ id }) => id !== Number(action.payload.id));
    },
  },
});

export const { addUser, removeUser, addMovieInWatchList, removeMovieFromWatchList } = userSlice.actions;

export default userSlice.reducer;
