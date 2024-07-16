//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".


let diaDeLaSemana = prompt("Me indicas que dia de la semana es");

console.log(diaDeLaSemana);
/*
Este código realiza
la comparación
*/
if (diaDeLaSemana === 'Sabado' || diaDeLaSemana === 'Domingo' ) {
    //Acertamos, fue verdadera la condición
    alert('¡Buen fin de semana!');
} else {
    //La condición no se cumplió
    alert('¡Buena semana!');
}