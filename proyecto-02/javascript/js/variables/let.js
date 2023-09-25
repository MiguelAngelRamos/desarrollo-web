let precio = 20;
precio = 30;
precio = 40;
precio = 100;

//* tiene tipado dinamico
//* precio = "casa"
//* precio = true
precio = 1000;
console.log(precio);

//* Respetara el ambito??
let notebook = "Asus";
let serieGlobal; 
if(true) {
  let notebook = "MSI";
  console.log(notebook); //??
  let serie = "dark";
  serieGlobal = serie;
} else {

}
console.log(notebook); // ???
// console.log(serie);
console.log(serieGlobal);