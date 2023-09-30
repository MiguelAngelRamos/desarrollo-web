const getApiRickAndMortyFull = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data; //* {} el objeto result completo de la respuesta 
};

export { getApiRickAndMortyFull }