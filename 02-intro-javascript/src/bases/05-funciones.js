// Funciones
// No se recomienda declarar variables de esta manera ya que la variable con la cual se declaro la
// función, puede ser "solapada" o reescrita por otra variable con el mismo nombre
// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

// saludar = 30; // Al imprimir esto, ya no es la referencia a la función

// // console.log( saludar('Goku') )
// console.log( saludar )


// FORMA RECOMENDADA - > APLICAR ESTA PARA EL CURSO
const saludar2 = function(nombre){
    return `Hola, ${nombre}`;
}
// saludar2 = 20; // Mostrará error ya que no puede ser reasignado debido a que es una constante
console.log( saludar2 )


// Funciones de flecha
const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log( saludar3('Vegeta') );


// Cuando el arrow function solo tiene 1 linea de return, se toma el return por implicito y se puede simplificar asi
const saludar4 = ( nombre ) => `Hola, ${nombre}`;
const saludar5 = () => `Hola Mundo`;
console.log( saludar4('Goku') );
console.log( saludar5() );

// Consideraciones importantes a tener en cuenta al trabajar en React
// El siguiente ejemplo almacena una función en una constante, la cual devolverá un objeto con sus valores respectivos
const getUser = () => {
    return {
        uid: 'abc123',
        username: 'Elchiquifiaum'
    }
}
console.log( getUser() );

// Al tratar de simplificar el arrow function se puede interpretar que al quitar el return y las {} seguirá
// funcionando correctamente, sin embargo no será así ya que se visualizarán mensajes de error, este error será
// debido a que las llaves sirven para identificar el cuerpo de la función, y al estar tratando de retornar un
// objeto, JavaScript no podrá interpretar sí las llaves pertenecen al cuerpo de la función o al objeto.

// Entonces, para poder especificarle a JS que el dato que deseamos retornar es un objeto y no el cuerpo de
// la función, lo que podemos realizar es cerrar entre paréntesis todo aquellos que queremos aplicarle el return

// Los parentesis significan que se está retornando un objeto de manera ímplicita, en otras palabras,
// el return de ese arrow function es un objeto
const getUser2 = () =>
    ({
        uid: 'def456',
        username: 'NoobMaster69'
    })
const user = getUser2();
console.log( user );

// Tarea
// 1. Transformar a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) =>({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Jorvict');
console.log( usuarioActivo );