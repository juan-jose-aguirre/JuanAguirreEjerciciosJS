/*Duplicar cada número en un array*/
const numerosP1 = [1, 2, 3, 4, 5];
let doble = numerosP1.map((num) => num * 2);
console.log(doble);
/*Convertir un array de cadenas a mayúsculas*/
const palabras = ["hola", "mundo", "javascript"];
let mayusculas = palabras.map((palabrita) => palabrita.toUpperCase());
console.log(mayusculas);
/*Extraer las edades de un array de objetos*/
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 40 },
];
let soloEdad = personas.map((persona) => persona.edad);
console.log(soloEdad);
/*Crear un nuevo array combinando dos arrays existentes*/
const numerosP4 = [1, 2, 3];
const letras = ["a", "b", "c"];
let combinacion = numerosP4.map((num, index) => num + letras[index]);
console.log(combinacion);
/*Aplicar una función de transformación compleja a un array de objetos*/
const productosP4 = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
let descuentoMitad = productosP4.map((producto) => {
  return { nombre: producto.nombre, precio: producto.precio * 0.5 };
});
console.log(productosP4);
console.log(descuentoMitad);
/*DESDE AQUI COMIENZA LOS EJERCICIOS OFICIALES*/
/*Entrega un arreglo de los nombres que contengan la letra “a” y ordena ese arreglo
alfabéticamente.*/
let nombresP1 = ["Ana", "Carlos", "David", "Elena", "Beto"];
let contieneA = nombresP1
  .filter((name) => name.includes("a"))
  .sort((a, b) => a.localeCompare(b));
console.log(contieneA);
/*Entrega un arreglo de los libros con más de 300 páginas. El arreglo debe estar organizado de
forma descendente según el número de páginas.*/
let libros = [
  { titulo: "Harry Potter", paginas: 400 },
  { titulo: "El Hobbit", paginas: 300 },
  { titulo: "Cienaños de soledad", paginas: 500 },
];
libros.sort((a, b) => a.paginas - b.paginas);
console.log(libros);
/* Entrega un arreglo de los productos que estén disponibles, con sus precios a un 30% de
descuento y organizados de forma alfabética DESCENDENTE.*/
let productosP3 = [
  { nombre: "Camisa", precio: 20, disponible: true },
  { nombre: "Pantalón", precio: 30, disponible: false },
  { nombre: "Zapatos", precio: 50, disponible: true }
];
let productosDisponibles = productosP3.filter(producto => producto.disponible === true).map(producto => { return{nombre:producto.nombre, precio:producto.precio*0.7, disponible: true}}).sort((a,b)=> a.precio - b.precio);
console.log(productosDisponibles);


