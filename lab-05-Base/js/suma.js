/*

function sumar(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let valor = parseInt(op1) + parseInt(op2)

    document.getElementById('rpta').innerHTML= valor;

} 

*/

function realizarOperacion(operacion) {
    const valor1 = parseFloat(document.getElementById("id1").value);
    const valor2 = parseFloat(document.getElementById("id2").value);

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = valor1 + valor2;
            break;
        case 'resta':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacion':
            resultado = valor1 * valor2;
            break;
        case 'division':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("rpta").innerHTML = resultado;
}
