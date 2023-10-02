/*
Funcion tradicional
*/

function sumarTradicional(){
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("resultado").innerHTML = rpta
}

/*
Usando funcion arrow 1
*/

let sumarArrow1 = () => {
    console.log("En arrow 1")
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("resultado").innerHTML = rpta
}

/*
Usando funcion arrow 2
*/

let sumarArrow2 = () => {
    console.log("En arrow 2")
    let v1 = document.getElementById("v1").value
    let v2 = document.getElementById("v2").value
    let rpta = sumarOtraforma(parseInt(v1), parseInt(v2))
    document.getElementById("resultado").innerHTML = rpta
}

let sumarOtraforma = (a, b) => a+b;

