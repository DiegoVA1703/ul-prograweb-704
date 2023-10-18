import fsPromises from 'fs/promises'
import path from 'path'
import process from 'process'

export default async function escribe(req, res){
    let filePath ='/src/json/ejemplo3.json'
    let ruta = path.join(process.cwd(), filePath)
    
    try{
        const data = JSON.stringify(req.body) 
        await fsPromises.writeFile(ruta, data)

        res.status(200).json({"msg": "se escribio OK"})
    }catch(error){
        console.log("Ocurrio un error")
    }
}