// 1) Leer numeroIngresado que el usuario ingresa
// si numeroIngresado es igual a 0
//     mostrar "El numero ingresado es 0."
// sino si el resto de numeroIngresado dividido entre 2 es 0
//     mostrar "El numero ingresado es par."
// sino
//     mostrar "El numero ingresado es impar."


import * as readlineSync from "readline-sync";

let numeroIngresado: number = readlineSync.questionInt("Ingrese un numero:");
if (numeroIngresado === 0) {
    console.log("El numero ingresado es 0."); 
} else if (numeroIngresado % 2 === 0) {
    console.log("El numero ingresado es par.");
} else {
    console.log("El numero ingresado es impar.");
}

