/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!"
En caso contrario, muestra "Intentalo nuevamente para ganar." */

let puntuacion = prompt("Escribe aqui tu puntuacion, porfavor: ");

console.log(puntuacion);

if (puntuacion >= 100 ) {
    //Ha ganado
    alert('¡Felicidades, has ganado!');
} else {
    //La condición no se cumplió
    alert('Intentalo nuevamente para ganar.');
}

