function imprimirNumeros(){
    console.log("1")
    console.log("2")
    console.log("3")
}

imprimirNumeros()
imprimirNumeros //solo manda la funcion, no la ejecuta

//funciones con parametros

function suma(num1,num2){
    console.log(num1+num2)
}
suma(5,7)

    
function sumaReturn(num1,num2){
    return num1 + num2
}

console.log(sumaReturn(1,3) +1)

//orden de los parametros
function saludar(nombre, primerApellido){
    console.log("hola, soy " + nombre + " " + primerApellido)
}

saludar("ricardo", "lopez")


//funciones de alto orden: son funciones que reciben como parametro otras funciones o las utilizan dentro de su funcion 
function operacionMatematica(num1,num2,operacion){
    return operacion(num1,num2) //suma(8+1)
}

function suma(num1,num2){
    return num1 + num2
}

operacionMatematica(8,1,suma)// no se muestra en consola, requiere el console.log
console.log(operacionMatematica(8,1,suma))

//funciones flecha
const saludarFlecha = (nombre,papellido) => {
    console.log("Hola, soy "+ nombre + " "+ papellido)
}
saludarFlecha("Ricardo","Lopez")


//short arrowfunction
//si la funcion solo retorna un valor se puede quitar el return
const sumaFlecha = (num1, num2) => num1 + num2
console.log(sumaFlecha(4,4))

//variables globales, sion aquellas que no fueron declardas dentro de alguna estructura o funcion

let edad = 19
let nombre = "juan"

function mayorEdad(){
    if(edad >= 18){
        return nombre + ", eres mayor de edad"
    }
    else if (edad < 18){
        return nombre + ", eres menor de edad"
    }
}
console.log(mayorEdad())


//Problema 1: Crear una función que determine si un número es par o impar.

function dividir (numero) {
    if (numero%2>0){
          return "impar"
      }
    else {
  return  "par"
    }   
  }
  console.log(dividir(7))
//Problema 2: Escribir una función que calcule el área de un círculo. pixr2
function area (radio) {
    return 3.1416*(radio*radio)
  }
  console.log(area(4))

//Problema 3: Utilizar una función de alto orden para aplicar una operación a dos números.
