// CASO 1: Obtener la cabecera del documento

let cabecera = document.head;
console.log(cabecera);

// CASO 2: Obtener el cuerpo del documento
let cuerpo = document.body;
console.log(cuerpo);

let lpAntiguos = document.getElementById("antiguo");
console.log(lpAntiguos);

let arr_antiguos = [];

let nodos = lpAntiguos.childNodes;
for (let i = 0; i < nodos.length; i++) {
    console.log(nodos[i]);
    if (nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_antiguos.push(nodos[i].textContent);
    }
}

document.getElementById("rpta1").innerHTML = arr_antiguos.join(", ");

let lpModernos = document.getElementById("moderno");
let arr_modernos = [];

let nodo = lpModernos.childNodes;
for (let i = 0; i < nodo.length; i++) {
    console.log(nodo[i]);
    if (nodo[i].nodeType == document.ELEMENT_NODE) {
        arr_modernos.push(nodo[i].textContent);
    }
}

document.getElementById("rpta2").innerHTML = arr_modernos.join(",");

// Caso 5: Concatenar arreglos
document.getElementById("rpta3").innerHTML = arr_antiguos.concat(arr_modernos).join(", ");


// Caso 7: Ubicar la posicion de un elemento en un arrglo
let pos = arr_modernos.indexOf("Kotlin");
document.getElementById("rpta3").innerHTML = pos.toString();

// Caso 8: Insertar un elemento
arr_modernos.splice(1, 0, 'Lambda', 'Malbolge');
document.getElementById("rpta3").innerHTML = arr_modernos;


// Caso 9: Insertar y borrar un elemento

arr_modernos.splice(3, 1, 'Intercal', 'coaK!');
document.getElementById("rpta4").innerHTML = arr_modernos;

// Caso 10: Borrar un elemento

arr_modernos.splice(3, 1);
document.getElementById("rpta5").innerHTML = arr_modernos;

// Caso 11: obetener el ultimo elemento de un arreglo
var elemento = arr_modernos.pop();
document.getElementById("rpta1").innerHTML = elemento;


// Caso 12: obtener el primer elemento
var elemento = arr_modernos.shift();
document.getElementById("rpta1").innerHTML = elemento;

//Caso 13: colocar un elemento al final
arr_modernos.push('Dart');
document.getElementById("rpta1").innerHTML = arr_modernos;

//Caso 14: otra forma de colocar un elemento al final
arr_modernos[arr_modernos.length] = 'Opa';
document.getElementById("rpta1").innerHTML = arr_modernos;

//Caso 15: otra forma de colocar un elemento al inicio
arr_modernos.unshift('SQL');
document.getElementById("rpta1").innerHTML = arr_modernos;


//Caso 16: ordenar el arreglo
arr_modernos.sort();
document.getElementById("rpta1").innerHTML = arr_modernos;

//Caso 17: ordenar el arreglo al revés
arr_modernos.reverse();
document.getElementById("rpta1").innerHTML = arr_modernos;

// Caso 18: generar HTML

var rpta = []
rpta.push('<ol>')
rpta.push('<li>Peru - 0</li>')
rpta.push('<li>Brasil - 3</li>')
rpta.push('<li>Chile - 1</li>')
rpta.push('</ol>')
var contenido = rpta;

document.getElementById('rpta1').innerHTML = contenido  
