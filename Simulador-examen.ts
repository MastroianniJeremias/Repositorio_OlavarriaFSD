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

function ordenarDescendente(arreglo: number[]): number[] {
    let ordenado = arreglo.slice();
    ordenado.sort((a, b) => b - a);
    return ordenado;
}

console.log(ordenarDescendente([10, 20, 30, 40, 50]));