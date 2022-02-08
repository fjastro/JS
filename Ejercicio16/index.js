//Número de enlaces en la página

var enlaces = document.getElementsByTagName("a");
console.log("Número de enlaces en la página", enlaces)

// resultado {"0": {}, "1": {}, "2": {}, "3": {}, "4": {}, "5": {}}

//Dirección a la que enlaza el penúltimo enlace

var penultimoEnlace = "El penúltimo enlace apunta a: " + enlaces[enlaces.length-2].href;
console.log (penultimoEnlace)

// resultado: https://geonet.esri.com/welcome

//Número de enlaces del tercer párrafo

var parrafos = document.getElementsByTagName("p");
enlaces = parrafos[2].getElementsByTagName("a");
console.log("Número de enlaces del tercer párrafo", enlaces);

//resultado {"0": {},"1": {}}


//Se añade párrafo al documento con la función innerHTML

const parrafo = document.createElement("p");
parrafo.innerHTML = "Número de enlaces en la página son 6, El penúltimo enlace apunta a: https://geonet.esri.com/welcome y el número de enlaces del tercer párrafo son 2"
document.body.appendChild(parrafo);
console.log(parrafo)
