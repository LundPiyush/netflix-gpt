export const isMovieInWatchlist = (watchList, movieId) => {
  return watchList.find(({ id }) => id === Number(movieId)) !== undefined;
};
