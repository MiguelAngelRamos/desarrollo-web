/*
* Arrays y sus métodos "map()"
* EL método map(), crea un nuevo array y el array resultante tiene una modificación por cada uno de sus elementos.
 */
const numeros = [10, 20, 30, 40]; //* cuando aplicamos el map genera un nuevo array con elementos modificados
//* indices      0 ,  1,  2, 3
console.log(numeros[0]); //* imprimir 10
console.log(numeros[1]); //* imprimir 20
console.log(numeros[2]); //* imprimir 30
console.log(numeros[3]); //* imprimir 40
//* La longitud de array es
console.log("La longitud del array numeros es: " + numeros.length);

const resultadoMap = numeros.map((number) => {
  return number * 2;
})
console.log(resultadoMap); //* [20, 40, 60, 80]

//* Como conclusión el metodo map recorre cada elemento del array
//* Genera un nuevo array modificado

const colores = ['Amarillo', 'Rojo', 'Verde'];
const isValid = [true, false];

//* JavaScript es dinamico
const arrayDinamico = ['Amarillo', true, false, 'Verde'];

const empleados = []; 

const usuario = {
  id: 1,
  nombre: 'Sofia'
};