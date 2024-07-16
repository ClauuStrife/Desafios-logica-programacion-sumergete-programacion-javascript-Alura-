// 1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let CambioDeNombre = document.querySelector('h1');
CambioDeNombre.innerHTML = 'Hora del Desafío';

// 2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function botonClicado() {
console.log("El botón fue clicado");
}

/* 3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti". */

function alertCiudad(){
    let ciudad = prompt("Me indicas el nombre de una ciudad de Brasil, porfavor");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// 4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function presionarAlerta(){
    let alerta = "Yo amo JS";
    alert(alerta);
}

// 5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function sumarDosNumeros(){
    let n1 = parseInt(prompt("Escribe un numero, porfavor"));
    let n2 = parseInt(prompt("Escribe otro numero, porfavor"));
    let resultado = n1 + n2;
    alert(`La suma de ${n1} + ${n2} es igual a ${resultado}`)
}
