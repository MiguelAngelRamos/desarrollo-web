const rowCards = document.querySelector('#row-cards');
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

export {
  cardCharacter,
  generatorCreateCards
}