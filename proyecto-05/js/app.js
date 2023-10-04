import { fetchMovies } from "./api/api-rest.js";

const getMoviePopular = async () => {
  const data = await fetchMovies('popular');
  console.log(data);
};


getMoviePopular();