export const fetchMovies = async (endpoint, params = {}) => {
  
  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  
  //* Crear un objeto URL
  const url = new URL(BASE_URL + endpoint);

  //* Definir los parametros de consulta las credenciales
  const defaultParams = {
    api_key: '1865f43a0549ca50d341dd9ab8b29f49',
    language: 'es-ES'
  };
 //* 2 formas de acceder al valor de llave
  // defaultParams.api_key
  // defaultParams[api_key]
  //* combinar ambos
  const finalParams = {...defaultParams, ...params};

  //* Añadir los parametros de la consulta a la URL
  Object.keys(finalParams).forEach(key => url.searchParams.append(key, finalParams[key]));

  //* Nuestra URL construida.
  console.log(url);
  //* https://api.themoviedb.org/3/movie/top_rated?api_key=1865f43a0549ca50d341dd9ab8b29f49&language=es-ES

  try {
    const response = await fetch(url);
    return response
  } catch (error) {
    console.error(error);
    throw error;
  }

};

fetchMovies('top_rated')

