import { fetchMovies } from "./api/api-rest.js";
import { createSlide } from "./slide/slide.js";

const getMoviePopular = async () => {
  const data = await fetchMovies('popular');
  console.log(data);
  setInterval( () => {
    createSlide(data.results);
  }, 4000);

};


getMoviePopular();


const videoCards  = [...document.querySelector('.video-card')];