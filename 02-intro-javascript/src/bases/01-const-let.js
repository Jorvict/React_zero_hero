// Variables y constantes

// const son variables que no se van a cambiar o renombrar
const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Var no se debe usar
if(true){
    const nombre = 'Peter'
    let valorDado = 6; // Este valor dado solo va a existir dentro del scope del if

    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado); // Presionar CTRL + Barra espaciadora para activar autocompletado
