//* Crear la captura con las referencias (id)
let boton = document.querySelector('#addText');
let vacioDiv = document.querySelector('#miDiv');

//* boton tiene eventos (click)

boton.addEventListener('click', function() {

  // * crear un elemento html con javascript (parrafo)
  let nuevoParrafo = document.createElement('p'); // * creo un parrafo
  //* nuevoParrafo = <p></p>
  //* Agregamos Texto al Parrafo
  nuevoParrafo.textContent = 'Curso de desarrollo web';
  nuevoParrafo.classList.add('mb-2', 'border', 'p-3');
  // console.log(nuevoParrafo);

  //* Agregar el nuevo creado (parrafo) al div vacio
  vacioDiv.appendChild(nuevoParrafo);

  //* Agregar los estilos al div
  vacioDiv.classList.add('bg-success', 'p-3', 'text-white');
  
});