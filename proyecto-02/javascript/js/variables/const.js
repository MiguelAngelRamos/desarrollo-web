/*
* const se utiliza para definir una constante, su valor no puede cambiar, pero hay ciertas excepciones con los "Objetos" y "Arreglos"
 */
const PI = 3.14;
// PI = 20;
console.log(PI);

//* array
const arrayNumeros = [10, 20, 30]; //* longitud 3 (cantidad de elementos que hay un array)
        //* indices    0, 1, 2
console.log(arrayNumeros[0]); //* 10
console.log(arrayNumeros[1]); //* 20
console.log(arrayNumeros[2]); //* 30
console.log(arrayNumeros.length); //* 3

//* añadir un nuevo elemento al array "arrayNumeros"
arrayNumeros.push(800);
console.log(arrayNumeros.length);
console.log(arrayNumeros);

//* Objetos JAVASCRIPT (Objeto Literal)

const persona = { 
  nombre: 'Sofia', 
  lenguaje: 'JavaScript'
};

console.log(persona.nombre); //* Sofia
console.log(persona.lenguaje) //* JavaScript

persona.pais = 'Chile';
console.log(persona); //* { nombre: 'Sofia', lenguaje: 'JavaScript', pais: 'Chile' }
persona.lenguaje = 'Python';
console.log(persona); //* { nombre: 'Sofia', lenguaje: 'Python', pais: 'Chile' }