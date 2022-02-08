//Array con números aleatorios
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

//se usa el método filter para filtrar los números pares del Array
const pares = number.filter(function(numero){
    return numero % 2 == 0;
});

//se pinta en consola el resultado
console.log('pares', pares);
//resultado  [20, 562, 258, 254]

//se usa el método filter para filtrar los números impares del Array
const impares = number.filter(function(numero){
    return numero % 2 != 0;
})

//se pinta en consola el resultado
console.log('impares', impares);
// resultado [253, 8575, 1, 1233, 25, 27, 7485, 2683]


//simplificación de la función utilizando las funciones flecha

const pares1 = number.filter(numero => numero % 2 == 0);
//resultado en consola para los números pares
console.log('pares1', pares1);

const impares1 = number.filter(numero => numero % 2 != 0);
//resultado en consola para los números impares
console.log('impares1', impares1);
