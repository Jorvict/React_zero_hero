// Template String

const nombre = 'Jorvict';
const apellido = 'Piña';

const nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );

const nombreCompleto2 = `${nombre} ${apellido} ${1 + 1}`;
console.log( nombreCompleto2 );

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

// Dentro de los ${} se puede ejecutar codigo JS, eso incluye operaciones matematicas y funciones
console.log( `Este es un texto: ${ getSaludo( nombre ) }` );