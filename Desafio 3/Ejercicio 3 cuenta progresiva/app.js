// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let contador = prompt('Escribe un numero');

console.log(contador);

while (contador >= 0) {
console.log('Ejecutando contador: '+ contador);
contador = contador + 1;
}
