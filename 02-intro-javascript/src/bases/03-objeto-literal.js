// Objetos literales
// La , al final de la ultima llave dentro de un objeto es considerada buena práctica
// Recordar que al imprimir en consola un objeto, JS automaticamente ordena las keys en orden alfabetico

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 432567,
        lat: 24.5672,
        lng: 22.3451,
    }
}

// En caso deseemos saber el nombre del objeto que se imprime en consola, encerrar el bojeto entre llaves
// console.log( {persona} ); 


// console.table( persona ); 
console.log( persona ); 

// Sí queremos clonar un objeto, esta NO ES LA MANERA, ya que aquí no se están copiando los datos
// Lo que sucedió es que se está copiando la referencia a persona, es decir, si se modifica un valor
// en persona2, el cambio se aplicará en persona
const persona2 = persona;

persona2.nombre = 'Peter';

console.log( persona ); 
console.log( persona2 );

// Sí de verdad queremos generar un clon, creamos un nuevo objeto y con el spread operator copiamos otro objeto
const persona3 = {...persona}
persona3.nombre = 'Jarvis';
console.log( persona3 );