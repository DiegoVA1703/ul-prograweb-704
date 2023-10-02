// Constructores

let obj1 = new Object()

let obj2 = {}

let alumno = {
    nombre: 'Pepito',
    codigo: '2023001'

}
// acceder a los atributos del objeto
console.log(alumno.nombre)
console.log(alumno.codigo)

// asignar propiedades
alumno.ciclo = "2023-2"
console.log(alumno.ciclo)

alumno.nota1 = 9
console.log(alumno.nota1)

//eliminar una propiedad
delete alumno.nota1
console.log(alumno)

// Propiedades de varias palabras
alumno['apellido paterno'] = 'Lopez'
console.log(alumno)

// validar que una propiedad exista en el objeto
console.log("Existe codigo en el alumno? "+ ('codigo' in alumno))

// convertir un objeto string
console.log(alumno.toString())
console.log(JSON.stringify(alumno))

// recorrer las propiedades del objeto
for( key in alumno){
    console.log("KEY = "+key + ' - '+alumno[key])
}
