//alert('hola mundo');

//console.log('muestra info');

//document.write('<h2>hola 2</h2>');

//prompt('escribe tu nombre');

//variables y constantes
var edad;
var nombre = "prueba";
edad = 24;

let clima = "soleado";

//string
let primerApelido = "solis";

//objecto literal

let perro = {
  nombre: "bimba",
  edad: 3,
  estaVacunado: true,
  informacionNacimiento: {
    ciudad: "CDMX",
    mesNacimiento: "enero",
  },
};

//acceder a un objeti literal

console.log(perro.informacionNacimiento.ciudad); //arroja CDMX

//modificar constante
const gato = {
  nombre: "tigre",
  edad: "7",
};

console.log(gato.edad);

gato.edad = 8;

console.log(gato.edad);

//guardar info en variable
let minombre = prompt("Escribe tu nombre");
console.log(minombre);

//concatenacion
let nombre1 = prompt("como te llamas");
alert ("hola" + nombre1);