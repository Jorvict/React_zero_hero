// Arreglos
// Es una coleccion de información que se encuentra dentro de una misma variable

// const arreglo = new Array(100); // Crea un arreglo de 100 posiciones, pero no significa que no se pueda expandir

const arreglo = [1, 2, 3, 4];

// No es recomendable insertar data con el push en un array debido a que se modifica el array original
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Al igual que objetos literales, al intentar clonar de esta manera lo que haremos es copiar la referencia
// al elemento original
let arreglo2 = arreglo;
arreglo2.push( 5 );

console.log( arreglo );
console.log( arreglo2 );

let arreglo3 = [...arreglo, 6];
console.log( arreglo3 );

// El map debe recibir un return mediante una función, el return se almacenara en el arreglo4
// La función que se ejecuta dentro de un método es conocido como Callback
// Dicha función se ejecutará N veces por cada elemento del arreglo sobre el que se recorre
// Sí no tiene un return explicito, entonces todo los valores que retorne serán undefined
const arreglo4 = arreglo3.map( function(numero){
    return numero * 2;
}); 
console.log( arreglo4 );
