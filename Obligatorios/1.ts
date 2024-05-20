// 1) Leer numeroIngresado que el usuario ingresa
// si numeroIngresado es igual a 0
//     mostrar "El numero ingresado es 0."
// sino si el resto de numeroIngresado dividido entre 2 es 0
//     mostrar "El numero ingresado es par."
// sino
//     mostrar "El numero ingresado es impar."

import * as readlineSync from "readline-sync";

// Leer el número ingresado por el usuario
let numeroIngresado: number = readlineSync.questionInt("Ingrese un número:");

// Verificar si el número es 0
if (numeroIngresado === 0) {
    console.log("El número ingresado es 0.");
}
// Verificar si el número es par
else if (numeroIngresado % 2 === 0) {
    console.log("El número ingresado es par.");
}
// Si no es ni 0 ni par, entonces es impar
else {
    console.log("El número ingresado es impar.");
}

