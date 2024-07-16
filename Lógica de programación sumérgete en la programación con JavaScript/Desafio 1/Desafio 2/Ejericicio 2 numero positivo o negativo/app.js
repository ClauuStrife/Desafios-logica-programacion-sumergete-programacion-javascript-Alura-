//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.


let numeroUsuario = prompt("Escribe un numero, porfavor: ");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario >= 0 ) {
    //Acertamos, fue verdadera la condición
    alert(`El número ${numeroUsuario} es positivo`);
} else {
    //La condición no se cumplió
    (numeroUsuario <= 0)
    alert(`El numero ${numeroUsuario} es negativo`);
}