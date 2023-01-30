/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 

es igual al máximo valor que se puede obtener en Javascript
*/

const alturaEnCentímetros = 180;
console.log(alturaEnCentímetros);

const alturaEnMetros = alturaEnCentímetros / 100;
console.log(alturaEnMetros);

const pesoEnkilogramos = 80;
console.log(pesoEnkilogramos);

const alturaEnMetrosHaciaArriba = Math.ceil(alturaEnMetros);
console.log(alturaEnMetrosHaciaArriba);

const pesoEnKilogramosHaciaAbajo = Math.floor(pesoEnkilogramos);
console.log(pesoEnKilogramosHaciaAbajo);


const maxValorEnJS = Number.MAX_VALUE;
const maxValorEnJSMasUno = maxValorEnJS + 1;
const maxValorIgual = maxValorEnJS === maxValorEnJSMasUno;
console.log(maxValorEnJS);
console.log(maxValorEnJSMasUno);
console.log(maxValorIgual);
