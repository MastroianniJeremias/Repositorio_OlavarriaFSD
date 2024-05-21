// 2) Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Sólo deben admitirse exponentes mayores o iguales a cero.
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos.
// (se resuelve con funciones)


import * as rls from "readline-sync";

// Función para calcular la potencia de un número
function calcularPotencia(base: number, exponente: number): number {
    let resultado: number = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Función principal para manejar la entrada y la lógica
function main(): void {
    let base: number = rls.questionInt("Ingrese el número base: ");
    let exponente: number = rls.questionInt("Ingrese el número exponente: ");
    
    // Validar que el exponente sea mayor o igual a 0
    while (exponente < 0) {
        console.log("Debe ingresar un número exponente mayor o igual a 0.");
        exponente = rls.questionInt("Ingrese el número exponente: ");
    }
    
    // Calcular la potencia una vez se tiene un exponente válido
    let potencia: number = calcularPotencia(base, exponente);
    console.log(`${base} a la ${exponente} potencia es: ${potencia}`);
}

// Ejecutar la función principal
main();

