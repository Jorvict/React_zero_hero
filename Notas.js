/* React es una librería, es declarativa lo cual facilita gestionar patrones de diseño, 
es eficiente debido a que si modificamos algo, en vez de cargar nuevamente todso el DOM, 
lo que hará es cargar nuevamente el elemento especifico. */

const divRoot = document.querySelector('#root');

// JSX es JavaScript + XML
// const h1Tag = <h1>Hola Mundo</>
// ReactDOM.render( h1Tag, divRoot );


/* React en su background utiliza Babel. ¿qué es Babel?, nos permite utilizar caracteristicas actuales de JS
que han sido recientemente aceptadas en el standard de ECMAscript, y poder utilizar ese código incluso
en navegadores que aún no soportan esas características. */

// Por ejemplo:

// Código que puede que no sea compatible con todos los navegadores
// const suma = `1 + 1 = ${ 1 + 1 }`;

// Código mas compatible, interpretado por Babel
// const suma = "1 + 1 = " + (1 + 1);