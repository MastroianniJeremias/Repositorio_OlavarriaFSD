// console.log("Hola Mundo"); 


// Escribe una función que tome dos números como parámetros y devuelva la suma de ambos

// function suma(a: number, b: number): number {
//     return a + b;
// }

// console.log(suma(20, 30));


// Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos

// function promedio(arreglo: number[]): number {
//     let promedio = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         promedio += arreglo[i];
//     }
//     return promedio / arreglo.length; 
// }

// console.log(promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande

// function numberMax(arreglo: number[]): number {
//     let numberMax = arreglo[0];
//     for (let i = 1; i < arreglo.length; i++) {
//         if (arreglo[i] > numberMax) {
//             numberMax = arreglo[i];
//         }
//     }
//     return numberMax;
// }

// console.log(numberMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados

// function concatenar(arreglo1: number[], arreglo2: number[]): number[] {
//     return arreglo1.concat(arreglo2);
// }

// console.log(concatenar([1, 2, 3], [4, 5, 6])); 


// Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos

// function multiplicarElementos(arreglo: number[]): number {
//     let producto = 1;
//     for (let i = 0; i < arreglo.length; i++) {
//         producto *= arreglo[i];
//     }
//     return producto;
// }

// console.log(multiplicarElementos([1, 2, 3, 4]));


// Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es

// function esPrimo(number: number): boolean {
//     if (number === 2)
//         return true;
//     for (let i = 2; i < number; i++) {
//         if (number  % i === 0) return false;
//     }
//     return true;
// }

// console.log(esPrimo(6));


// Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento aparece en el arreglo

// function cantidadElemento(elemento: number, arreglo: number[]): number {
//     let contador = 0; 
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] === elemento) {
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(cantidadElemento(2, [1, 2, 3, 4, 5, 6, 2, 8, 9, 10]));


// Implementa una función que tome dos números como parámetros y devuelva el número más pequeño

// function numeroMin(numero1: number, numero2: number): number {
//     if (numero1 < numero2) {
//         return numero1; 
//     }
//     return numero2;
// }

// console.log(numeroMin(10, 20)); 


// Escribe una función que tome un arreglo de números como parámetro y lo ordene de forma descendente

// function ordenarDescendente(arreglo: number[]): number[] {
//     let ordenado = arreglo.slice();
//     ordenado.sort((a, b) => b - a);
//     return ordenado;
// }

// console.log(ordenarDescendente([10, 20, 30, 40, 50]));


// 1) Leer numeroIngresado que el usuario ingresa
// si numeroIngresado es igual a 0
//     mostrar "El numero ingresado es 0."
// sino si el resto de numeroIngresado dividido entre 2 es 0
//     mostrar "El numero ingresado es par."
// sino
//     mostrar "El numero ingresado es impar."

// import * as readlineSync from "readline-sync";

// let numeroIngresado: number = readlineSync.questionInt("Ingrese un numero:");
// if (numeroIngresado === 0) {
//     console.log("El numero ingresado es 0."); 
// } else if (numeroIngresado % 2 === 0) {
//     console.log("El numero ingresado es par.");
// } else {
//     console.log("El numero ingresado es impar.");
// }


// 2) Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Sólo deben admitirse exponentes mayores o iguales a cero.
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos.
// (se resuelve con funciones)

// import * as readlineSync from "readline-sync";

// function potencia(base: number, exponente: number): number {
//     if (exponente === 0) {
//         return 1;
//     }
//     return potencia(base, exponente - 1) * base;
// }

// console.log(potencia(2, 4)); Falta preguntarle al usuario que ingrese el numero base y el exponente


// 3) Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar

// let arrayNumbers: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// function encontrarNumMax(arrayNumbers: number[]): number {
//     let numMax = arrayNumbers[0];
//     for (let i = 0; i < arrayNumbers.length; i++) {
//         if (arrayNumbers[i] > numMax) {
//             numMax = arrayNumbers[i];
//         }
//     }
//     console.log(`El numero mayor es ${numMax}`);
//     return numMax;
// }

// function esPar(num: number): boolean {
//     if (num % 2 === 0) {
//         console.log("El numero es par.");
//         return true;
//     } else {
//         console.log("El numero es impar.");
//         return false;
//     }
// }

// let num: number = encontrarNumMax(arrayNumbers);
// esPar(num);


// Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O que hay en ese string y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
// Pegar el codigo aquí.

// Crear un string de al menos 15 caracteres
// let string: string = "Me gusta programar";

// Variables globales incializadas en cero para contar las letras
// let contadorA: number = 0;
// let contadorE: number = 0;
// let contadorO: number = 0;

// Se recorre el string y cuenta las vocales 'A', 'E' y 'O'
// for (let i = 0; i < string.length; i++) {
//     if (string[i] === "a") {
//         contadorA++;
//     } else if (string[i] === "e") {
//         contadorE++; 
//     } else if (string[i] === "o") {
//         contadorO++;
//     }
// }

//  Las cantidades estan almacenadas en este arreglo
// const resultado: number[] = [contadorA, contadorE, contadorO];


// Corregir los errores que encuentre: 

//  function sumarArreglo(arreglo: number[]): number {
//     let suma: number = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//     }
//     return suma;
// }

// console.log(sumarArreglo([365, 2024]));


// Corregir los errores que encuentre:

// function establecerColorPorNota(valor: number): string {
//     if (valor >= 0 && valor < 7) {
//         return "Rojo";
//     } else if (valor >= 7 && valor <= 10) {
//         return "Verde";
//     }
//      return "Gris";
// }

// console.log(establecerColorPorNota(5));


// Corregir los errores que encuentre: 

// function obtenerPromedio(arr: number[]): number {    
//     let suma: number = 0;
//     let promedio: number = suma / arr.length;
//     return promedio;
// }