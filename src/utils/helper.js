export const isMovieInWatchlist = (watchList, movieId) => {
  return watchList.find(({ id }) => id === Number(movieId)) !== undefined;
};

export const isMovieInLikesList = (likesList, movieId) => {
  return likesList.find(({ id }) => id === Number(movieId)) !== undefined;
};

export const findRating = (ratingsList, id) => {
  const existingRating = ratingsList.find(({ movieId }) => movieId === id);
  // Assign initialValue based on whether the movie ID exists in the ratings list
  const ratingValue = existingRating ? existingRating.rating : 0;
  return ratingValue;
};
