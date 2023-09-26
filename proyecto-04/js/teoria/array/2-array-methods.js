//* Filter es otro método de array y que hace "filtrar"

const carrito = [
  { nombre: 'Notebook MSI', precio: 1600000},
  { nombre: 'Mouse Razer', precio: 60000 },
  { nombre: 'Audifonos Razer', precio: 80000},
  { nombre: 'Monitor Samsung', precio: 350000},
];

const resultadoFilter = carrito.filter(product => {
  return product.precio < 1000000;
});

const resultadoFilterSimplificado = carrito.filter(product => product.precio < 1000000);

console.log(resultadoFilter);

console.log(resultadoFilterSimplificado);


const empleadosConRoles = [
  { id: 1, name: 'Sofia', role: 'Admin'}, 
  { id: 2, name: 'Pedro', role: 'Supervisor'}, 
  { id: 3, name: 'Catalina', role: 'Supervisor'}, 
  { id: 4, name: 'Monserrat', role: 'Admin'}, 
  { id: 5, name: 'Angel', role: 'Admin'}, 
  { id: 6, name: 'Nicole', role: 'Admin'}
];

//* filter y map
const listaSupervisores = `
  <ul>
    ${empleadosConRoles
      .filter(empleado => empleado.role === 'Supervisor')
      .map(empleado => `<li>${empleado.name.toUpperCase()} - ${empleado.role.toUpperCase()} </li>`)
   }
  </ul>
`;

console.log(listaSupervisores);