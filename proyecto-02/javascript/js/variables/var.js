//* var
//* declaramos la variable con (var nombre = "Pedro")

var nombre = "Pedro"; //* String "una cadena de texto"

console.log(nombre);
nombre = 2023; // * asignando un nuevo valor a la variable, pero no estamos declarando la variable nuevamente.
console.log(nombre);
nombre = true; //* booleanas (variables de tipo logica) "verdadero" o "falso" (true, false)
console.log(nombre);
nombre = "cuchara";
console.log(nombre);

var nombre = "Santiago";

console.log(nombre);
//* TIPADO DINAMICO
var edad = 30;
console.log(edad);
//* Ram 
//* A - M - B - I - T - 0
var lenguajeProgramacion = "javascript";

//* Condicional if 
//* booleano(tipo logica) es verdadero o falso

if(true) {
  //* scope
  var lenguajeProgramacion = "python";
  console.log(lenguajeProgramacion);
} else {
  console.log("esto es falso");
}
console.log(lenguajeProgramacion); //* el var no respeta el Scope