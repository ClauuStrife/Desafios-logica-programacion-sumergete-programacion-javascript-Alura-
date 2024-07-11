/* 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola. */

let valor1 = 4;
let valor2 = 14;

let resultado = valor2 - valor1;

console.log(`la diferencia entre ${valor1} y ${valor2} es igual a: ${resultado}`);

/* 7. Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. */

let respuesta = prompt('Ingrese su edad');

console.log (respuesta);

if (respuesta >= 18 ) {
    console.log('La persona es mayor de edad');
} else {
console.log('La persona es menor de edad');
}

/* 8. Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente. */

let numero = prompt('Ingrese un numero negativo o positivo de su preferencia');

if(numero > 0 ){
    console.log('El numero es positivo')
    alert("El numero que escribio es positivo!")
} else if 
(numero < 0) {
    console.log('El numero es negativo')
    alert("El numero que escribio es negativo")
} else {
    console.log('El numero es cero')
}

// 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 1;

while (contador <= 10) {
    console.log(contador);

    contador = contador + 1;
}

/* 10. Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. */

let nota = 5;

if (nota >= 7){
    console.log('Aprobado')
} else {
    console.log('Reprobado')
}

// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

console.log(Math.random());

// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

console.log(Math.floor(Math.random() * 100));

// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

console.log(Math.floor(Math.random() * (1000 - 1) + 1));
