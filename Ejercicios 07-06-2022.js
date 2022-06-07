//1

// let numero1 = parseInt(prompt("Ingrese un numero: ")) 
// let numero2 = parseInt(prompt("Ingrese un numero: "))

// if(numero1 > numero2){
//     console.log("el mayor de los 2 numeros es: "+ numero1)
// } else{
//     console.log("el mayor de los 2 numeros es: "+ numero2)
// }


//2

// const precio = 5;
// let cantidad = parseInt(prompt("Ingrese la cantidad de helados que desea comprar: "))

// console.log("El monto a pagar seria: " + (precio*cantidad))

//3

// const anio = 2022;
// let edad = parseInt(prompt("Ingrese su edad: "));

// let cumplido = parseInt((prompt("Cumplio los " + edad + " este anio? 1: SI | 0:NO")));

// if(cumplido == 1){
//     console.log("El anio en el que usted nacio es: " + (anio - edad))
// } else{
//     console.log("El anio en el que nacio es: " + (anio - (edad + 1)));
// }

//4

// let nota1 = parseInt(prompt("Ingrese nota 1: "))
// let nota2 = parseInt(prompt("Ingrese nota 2: "))
// let nota3 = parseInt(prompt("Ingrese nota 3: "))

// let promedio = (nota1 + nota2 + nota3)/3;

// if(promedio>13){
//     console.log("El promedio de notas del alumno es: " + promedio + " por lo tanto, el alumno aprobo el curso")
// }else{
//     console.log("El promedio de notas del alumno es: " + promedio + " por lo tanto, el alumno NO aprobo el curso")
// }

//5

// const anio_actual = 2022;
// let anio_nacimiento = parseInt(prompt("Ingrese el anio en el que nacio"));

// if(anio_actual-anio_nacimiento >= 18){
//     let nombre = prompt("Ingrese su nombre")
//     let apellido = prompt("Ingrese su apellido: ")
//     let edad = anio_actual - anio_nacimiento
//     console.log("Hola " + nombre + " " + apellido + " tu edad actual es " + edad)
// } else {
//     console.log("Usted no es mayor de edad")
// }

//6

// let precio = parseInt(prompt("Ingrese el precio del producto"))
// const IVA = 21/100;

// console.log("El monto total a pagar (precio con IVA incluido) es: " + (precio + (precio * IVA)) )

//7

// let letra = prompt("Inserte una letra en minuscula cualquiera")

// if((letra == 'a') || (letra == 'e') || (letra == 'i') || (letra == 'o') || (letra == 'u')){
//     console.log("Es una vocal")
// }else{
//     console.log("No es una vocal")
// }

// 8

// let nombre = prompt("Ingrese su nombre")
// let edad = parseInt(prompt("Ingrese su edad"))

// if(edad <= 24){
//     console.log("El nombre es " + nombre + " y tiene menos de 24 anios")
// } else if(edad > 24 && edad < 28){
//     console.log("El nombre es " + nombre + " y tiene mas de 24 anios")
// } else if(edad >= 28 && edad <= 35){
//     console.log("El nombre es " + nombre + " y tiene entre 28 y 35 anios")
// }else{
//     console.log("El nombre es " + nombre + " y tiene " + edad+  " anios")
// }

//9

let numero1 = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese un numero"))

if((numero1 + numero2 == 10) && (numero1 % numero2 == 0)){
    console.log("La suma de los numeros es 10 y su resto es 0")
} else if ((numero1 + numero2 == 10) && (numero1 % numero2 != 0)){
    console.log("La suma de los numeros es 10, pero su resto NO es 0")
} else if ((numero1 + numero2 != 10) && (numero1 % numero2 == 0)){
    console.log("La suma de los numeros NO es 10, pero su resto es 0")
} else{
    console.log("La suma de los numeros NO es 10 y su resto NO es 0");
}
