/*
Reduce
*/

let data1 = [1,2,3,4,5,6,7,8,9]
let suma = 0
for(let i = 0; i < data1.length; i++){
    suma = suma + data1[i]
}
console.log(suma)

const suma2 = data1.reduce( (total, valorActual) => {
    return total + valorActual
})
console.log(suma2)

/*
foreach
*/

let muestra = data1.forEach((item, idx)=>{
    console.log(item)
    console.log(idx)
})

let suma3 = 0
data1.forEach((item) => {
    suma3 += item
})

console.log(suma3)

/*
MAP
*/
console.log("* * * M A P * * *")
let alumnos = ['Pepito', 'Carlitos', 'Luchito', 'Anita', 'Pepita']
const asistencia = alumnos.map((a, idx)=>{
    console.log(idx)
    return a + ' Presente'
}
)
console.log(asistencia)

/*
Filter
*/

const pares = data1.filter((n, idx)=>{
    console.log(idx)
    return n%2 == 0
})
console.log(pares)

