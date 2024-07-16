// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function HolaMundo (){
    let saludo = "¡Hola, mundo!";
    console.log(saludo);
    return;
}

HolaMundo();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function HolaNombre(nombre){
    console.log (`¡Hola, ${nombre}!`);
    return;
}

HolaNombre("Pablo");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleDelNumero(numero){
    console.log(numero*2);
    return;
}

dobleDelNumero(10);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function devolverPromedio(n1,n2,n3){
    let promedio = (n1 + n2 + n3) / 3;
    console.log(promedio);
    return;
}

devolverPromedio(100,99,99);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function devolverNumeroMayor (numero1, numero2){
    if (numero1 > numero2){
    console.log(numero1);
 } else {
    console.log(numero2);
    } 
}

devolverNumeroMayor(18,15);

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicarPorSiMismo(numero) {
    let multiplicar = numero*numero
    console.log(multiplicar);
    return;
} 

multiplicarPorSiMismo(9);