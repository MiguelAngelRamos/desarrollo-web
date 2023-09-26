/*
* Arrays y sus métodos "map()"
* EL método map(), crea un nuevo array y el array resultante tiene una modificación por cada uno de sus elementos.
 */
const numeros = [10, 20, 30, 40]; //* cuando aplicamos el map genera un nuevo array con elementos modificados
// //* indices      0 ,  1,  2, 3
// console.log(numeros[0]); //* imprimir 10
// console.log(numeros[1]); //* imprimir 20
// console.log(numeros[2]); //* imprimir 30
// console.log(numeros[3]); //* imprimir 40
// //* La longitud de array es
// console.log("La longitud del array numeros es: " + numeros.length);

const resultadoMap = numeros.map((number) => {
  return number * 2;
});

const resultadoMapSimplificado = numeros.map( number => number * 2);
// console.log(resultadoMap); //* [20, 40, 60, 80]

//* Como conclusión el metodo map recorre cada elemento del array
//* Genera un nuevo array modificado

const colores = ['Amarillo', 'Rojo', 'Verde'];
const isValid = [true, false];

//* JavaScript es dinamico
const arrayDinamico = ['Amarillo', true, false, 'Verde'];

const empleados = [
  { id: 1, name: 'Sofia'}, 
  { id: 2, name: 'Pedro'}, 
  { id: 3, name: 'Catalina'}, 
  { id: 4, name: 'Monserrat'}, 
  { id: 5, name: 'Angel'}, 
  { id: 6, name: 'Nicole'}
];

const resultadoEmpleados = empleados.map( (nombreEmpleado) => {
    return `<li>${nombreEmpleado.name}</li>`; //*{ id: 1, name: 'Sofia'}  => <li>Sofia</li>
   // return '<li>'+ nombreEmpleado.name + '</li>';
  //* en javascript da lo mismo "" o ''
});

const empleadoModificado = empleados.map(empleado => {
  if(empleado.name === 'Angel') {
    return {
      ...empleado,
      role: 'Supervisor'
    }
  }
  return empleado;
})
// console.log(resultadoEmpleados);

console.log(empleadoModificado);

const empleadosConRoles = [
  { id: 1, name: 'Sofia', role: 'Admin'}, 
  { id: 2, name: 'Pedro', role: 'Supervisor'}, 
  { id: 3, name: 'Catalina', role: 'Supervisor'}, 
  { id: 4, name: 'Monserrat', role: 'Admin'}, 
  { id: 5, name: 'Angel', role: 'Admin'}, 
  { id: 6, name: 'Nicole', role: 'Admin'}
];

const listaEmpleados = `
  <ul>
    ${empleadosConRoles.map(empleado => `<li>${empleado.name} - ${empleado.role} </li>`)}
  </ul>
`;

