let frutas = ["pera", "manzana", "platano", "sandia", "melon"];

//imprimir arreglo
console.log(frutas);

//imprimir ultimo elemento
console.log(frutas[4]);

//operacion matematicas
console.log(frutas[frutas.length - 1]);

//agrega datos
frutas.push('Guayaba');
console.log(frutas);

//borra datos
frutas.pop('Guayaba');
console.log(frutas);

//agrega un elemento al inicio del arreglo
frutas.unshift('Durazno');
console.log(frutas.length);

//elimina un elemento al inicio del arreglo 
frutas.shift();
console.log(frutas.length);

//metodo split
let alumnos = 'ricardo, juan, pedro';
let alumnosArreglo = alumnos.split(',');
console.log(alumnosArreglo);

//copiar el arreglo frutas en copiafrutas
let copiaFrutas = [...frutas];
console.log(copiaFrutas);

//utilizando splice para gregar elementos 
// 3 es apartir de donde se quiere agregar información
//1 el segundo valor es para saber cuantos valores quiero borrar a partir de esa posición
let copiaFrutas2 = [...frutas];
console.log(copiaFrutas2);
copiaFrutas2.splice(3,1,'Aguacate', 'uva');
console.log(copiaFrutas2);
