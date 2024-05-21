// 3) Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
// -Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// -Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
// si el numero es par o impar

// Inicializar el arreglo con los números dados
let arrayNumbers: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Función para encontrar el número más grande del arreglo
function encontrarNumMax(arrayNumbers: number[]): number {
    let numMax: number = arrayNumbers[0];
    for (let i = 1; i < 12; i++) {  // Utilizando 12 como tamaño fijo del arreglo
        if (arrayNumbers[i] > numMax) {
            numMax = arrayNumbers[i];
        }
    }
    console.log(`El número mayor es ${numMax}`);
    return numMax;
}

// Función para determinar si un número es par o impar
function paridadNumeroMayor(numeroMayor: number): number {
    let paridad: number = numeroMayor;
    if (numeroMayor % 2 === 0) {
        console.log("El número mayor es par.");
    } else {
        console.log("El número mayor es impar.");
    }
    return paridad;
}

// Encontrar el número mayor en el arreglo
let numeroMayor: number = encontrarNumMax(arrayNumbers);

// Determinar si el número mayor es par o impar
paridadNumeroMayor(numeroMayor);




