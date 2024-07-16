// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMax = prompt('Escribe un numero');
let contador = 0;

console.log(numeroMax);

while (contador <= numeroMax) {
console.log('Ejecutando contador: ' + contador);
contador = contador + 1;

alert(contador)
}
