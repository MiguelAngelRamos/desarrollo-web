const rowCards = document.querySelector('#row-cards');
//* Inicio de las peticiones hacia el API DE RICK AND MORTY
//* en "results" estan los personajes
//* 300ms promedio, es decir se toma su tiempo
const getApiRickAndMortyFull = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data; //* {} completo de la respuesta 
};
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

//* Vamos a crear la tarjeta (card)
const cardCharacter = character => {
  console.log(character);
  //* crear los elementos html
  const cardBootstrap = document.createElement('div'); //* <div></div>
  const imgCard = document.createElement('img'); //* <img src="..." />
  const cardBody = document.createElement('div'); //* <div></div>
  const titleCharacter = document.createElement('h5'); //* <h5></h5>
  const btnByIdCharacter = document.createElement('a'); //* <a></a>

 //* Añadir las clases

 cardBootstrap.classList.add('card','mt-4', 'col-3'); //* <div class="card mt-4"></div>
 imgCard.classList.add('card-img-top'); //* <img src="..." class="card-img-top"/>
 cardBody.classList.add('card-body'); //* <div class="card-body"></div>
 titleCharacter.classList.add('card-title', 'text-center'); //* <h5 class="card-title text-center"></h5>
 btnByIdCharacter.classList.add('btn', 'btn-success', 'mb-3'); //* <a class="btn btn-success mb-2"></a>

 //* Creamos los textos de los elementos
 const nameCharacter = document.createTextNode(character.name); //*
 const textButtonCharacter = document.createTextNode('Ir al personaje');

 //* Añadir textos a los elementos y la imagen a la etiqueta img
 titleCharacter.appendChild(nameCharacter);//* <h5 class="card-title text-center">Rick Sanchez</h5>
 btnByIdCharacter.appendChild(textButtonCharacter);//*  <a class="btn btn-success mb-2">Ir al personaje</a>
 imgCard.src=character.image; //* <img src="https://rickandmortyapi.com/api/character/avatar/17.jpeg" class="card-img-top"/>

//* El renderizado y orden de jerarquia
cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
cardBody.append(titleCharacter);
rowCards.append(cardBootstrap);
 
};



//* results es el characters
const generatorCreateCards = (characters) => {
  // console.log(characters);
  //* map
  characters.map(character => cardCharacter(character));
}