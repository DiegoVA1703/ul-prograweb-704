import fsPromises from 'fs/promises'
import path, { parse } from 'path'
import process from 'process'

export default async function leer(req, res) {
    // Se requiere que se envie el nro de pagina a retornar
    // http://localhost:3000/api/archivo3/leeArchivo?page=X
    const page = parseInt(req.query.page) || 1
    // nro o tamaño de pagina
    const pageSize = 5

    let filePath = '/src/json/ejemplo3.json'
    let ruta = path.join( process.cwd() , filePath )

    // lectura
    try {
        let data = await fsPromises.readFile( ruta )

        // contar cuanta data regreso
        const totalItems =  JSON.parse(data).length
        // cuantas paginas existen
        const totalPages = Math.ceil( totalItems / pageSize)
        // Extraer un SLICE del arreglo
        let items = JSON.parse(data)

        let start = (page -1) * pageSize
        let end = start + pageSize
        let itemsARetornar = items.slice(start, end)
        itemsARetornar = JSON.stringify(itemsARetornar)

        console.log(itemsARetornar)
        return res.status(200).json( {
            page,
            totalPages,
            pageSize,
            totalItems,
            items : JSON.parse(itemsARetornar)
        })

    } catch( error) {
        console.log(`Ocurrio un error al leer : ${error.message}`)
        return res.status(500).json( {} )
    }

}