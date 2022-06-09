//Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale, mostrarle en un alert los textos ingresados separados por una coma (,).

// let cadena = ''
// let PalabraMagica = ''

// do{
//     PalabraMagica = prompt("Ingresa la palabra magica");
//     cadena += PalabraMagica +", ";
//  }while(PalabraMagica != "Salir")
//  console.log(cadena)

 //OTRA FORMA

// let cadena = ''
// let PalabraMagica = prompt("Ingrese la palabra magica")
 
// while(PalabraMagica != "Salir"){
//     cadena += PalabraMagica +", ";
//     PalabraMagica = prompt("Ingrese la palabra magica")
// }console.log(cadena)

//=======================================================================================

//Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo hacia atrás hasta llegar a 0. NOTA: Tener en cuenta validar que es un número positivo el que ingresó.

// let numero

// do{
//     numero = parseInt(prompt("Ingrese un numero positivo"))
// }while(numero <= 0)

// for(let i = numero; i>=0; i--){
//     console.log(i)
// }

//Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo mostrando los números que son pares.

// let numero
// do{
//     numero = parseInt(prompt("Ingrese un numero positivo"))
// }while(numero <= 0)

// for(let i = numero; i>=0; i--){
    
//     if(i%2 != 0){
//         continue;
//     }
//     console.log(i)
// }

//Realizar un programa en donde se le pida al usuario 2 números y realice su multiplicación mediante sumas sucesivas (Ej.: El usuario ingresa los números 2 y 3, por lo cual la multiplicación sería: 2 + 2 + 2 O 3 + 3 y tendría que devolver 6).

// let numero1 = parseInt(prompt("Ingrese un numero"))
// let numero2 = parseInt(prompt("Ingrese un numero"))
// let suma=0
// for(let i = 0; i <numero2; i++){
    
//     suma += numero1
//     console.log("suma " + (i + 1) + " es: " + suma)
    
// }
// console.log("La multiplicacion de los numeros es: " + suma)

//Realizar un programa en donde se le pida al usuario 2 números y realice su división mediante restas sucesivas (Ej.: El usuario ingresa los números 6 y 3, por lo cual la multiplicación sería: 6 - 3 - 3 y tendría que devolver 2). Realice el problema anterior pero ahora muestre el resultado junto al resto de la división.

// let numero1 = parseInt(prompt("Ingrese numero MAYOR aqui"))
// let numero2 = parseInt(prompt("Ingrese numero menor aqui"))
// let resta = numero1
// let contador = 0

// for(let i = 0; resta >= numero2 ; i++){
//     resta -= numero2
//     contador ++;
// }

// if(resta == 0){
//     console.log("La division de los numeros es: " + contador)
// }else{
//     console.log("La division de los numeros es inexacta y el resto de la division es: " + resta)
// }


//Realice un programa que dados dos números, muestre todos los números que están en medio de ambos. (Ej: Ingreso 2 y 6, me tiene que mostrar 3, 4 y 5).

// let numero1 = parseInt(prompt("Ingrese numero menor aqui"))
// let numero2 = parseInt(prompt("Ingrese numero MAYOR aqui"))

// for(let i = numero1+1; i < numero2; i++){
//     console.log(i)
// }

//Realice un programa en donde se le solicite un número al usuario y le muestre en pantalla cuántos dígitos tiene. (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso 115 me tiene que mostrar 3). AYUDA: Dividir por 10 a un número le remueve un dígito.

// let numero = parseInt(prompt("Ingrese un numero"))
// let resto = numero
// let contador = 0
// for(let i = 0; resto >= 1; i++){
//     resto /= 10
//     contador ++;
// }console.log("El numero ingresado tiene " + contador + " digitos")

//Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre todos los que ingrese calcular cual es el mayor, el menor y la media.

// let cantidadDeNumeros = parseInt(prompt("Ingrese la cantidad de numeros de va a ingresar"));

// while(cantidadDeNumeros <= 0) {
//     cantidadDeNumeros = parseInt(prompt("Ingrese la cantidad de numeros de va a ingresar"));
// }

// let mayor = 0;
// let menor = 0;
// let media = 0;

// // 4 - 6 - 8

// for(let i = 1; i <= cantidadDeNumeros; i++) {

//     let numero = parseInt(prompt("Ingrese el número " + i));

//     if(i === 1) {
//         mayor = numero;
//         menor = numero;
//     }

//     // Calcular el mayor
//     if(numero > mayor) {
//         mayor = numero;
//     }

//     // Calcular el menor
//     if(numero < menor) {
//         menor = numero;
//     }

//     // Sumamos a la media el nuevo número
//     media = media + numero;
// }

// media = parseInt(media / cantidadDeNumeros);

// console.log("El mayor es: " + mayor);
// console.log("El menor es: " + menor);
// console.log("La media es: " + media);



//Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre todos los que ingrese calcular cual es el mayor, el menor y la media.

do{
    cantidadNumeros = parseInt(prompt("Ingresar cantidad de numeros a ingresar")) 
    console.log("La cantidad de numeros a ingresar es " +cantidadNumeros);   
 }while(cantidadNumeros <= 0);

let mayor = 0
let menor = 0
let promedio = 0

for(let i = 1; i <= cantidadNumeros; i++){
    let numero = parseInt(prompt("Ingrese el numero " + i ))

    if(i==1){
        mayor = numero
        menor = numero
    }

    if(numero>mayor){
        mayor = numero
    }

    if(numero< menor){
        menor= numero
    }

    promedio += numero

    console.log(i + ") " + numero)
}

promedio = parseInt(promedio / cantidadNumeros);
console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);
console.log("La promedio es: " + promedio);