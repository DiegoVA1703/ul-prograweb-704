let numeros = [2,4,6,8,10]
console.log(numeros)

//copiar arreglos

let otrosNumeros = [ ...numeros]
console.log(otrosNumeros)

//agregar elementos al arreglo
let arr1 = [ ...numeros, 1,3,5]
console.log(arr1)

let arr2 = [9,8,7, ...numeros, 1,3,5]
console.log(arr2)

//concatenar arreglos
let a = ['a', 'e', 'i']
let b = ['o', 'u']
let vocales = [...a, ...b]
console.log(vocales)

/*
String
*/
let c1 = 'Hola'
let c2 = "Hola"
let c3 = `Hola` // template string

let ciclo = 2023
let semestre = 2

// concatenar valores en un string
console.log(c1 +' '+ ciclo +' - '+semestre)

// usando templates
console.log(`${c1} ${ciclo} - ${semestre}`)
