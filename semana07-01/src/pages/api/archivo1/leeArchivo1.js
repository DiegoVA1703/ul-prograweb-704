import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function lee(req, res){
    let filePath ='/src/json/ejemplo2.json'
    let ruta = path.join(process.cwd(), filePath)
    
    try{
        const data = await fsPromises.readFile(ruta)
        console.log(data)
        res.status(200).json(JSON.parse(data))
    }catch(error){
        console.log("Ocurrio un error")
    }
}