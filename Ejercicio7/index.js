//Devuelve si un valor es par o impar


//Teniendo estas dos variables (numero que se introduce y resultado)

var checkNumber = prompt("Introduce un número entero");

var resultado = parImpar(checkNumber);
console.log('checkNumber', checkNumber, resultado);


function  parImpar(checkNumber ) {
    if(checkNumber % 2 == 0) {
        return "Número par";
    }
    else {
        return "Número impar";
    }
}



