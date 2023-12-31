import { getApiRickAndMortyFull } from "./api/rest.js";
import { generatorCreateCards } from "./components/card-bootstrap.js";

//* Inicio de las peticiones hacia el API DE RICK AND MORTY
//* en "results" estan los personajes
//* 300ms promedio, es decir se toma su tiempo

// async function getApiRickAndMortyFull() {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();
//   return data; // {} completo de la respuesta 
// }
//* necesitamos una función que me devuelva los resultados
const init = async () => {
  const apiRickAndMortyFull = await getApiRickAndMortyFull();
  const getCharacters = apiRickAndMortyFull.results; //* nos traemos el vector o array "results"
  // console.log(getCharacters);
  //* llama al generator
  generatorCreateCards(getCharacters);
};

//* llamo a la función
init();





