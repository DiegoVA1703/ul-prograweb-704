/*
Ejemplo usando useEffect y cargando toda la data
*/
import { useState, useEffect } from 'react'
import Layout from '../componentes/Layout'

const MiComponente = () => {
    const [datos, setDatos] = useState( [] )
    const [ flagCambio, setFlagCambio] = useState( 0 )

    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( '/api/archivos1/leeArchivo', opciones)
        let data = await request.json()
        console.log( data)
        
        setDatos( data )
        setFlagCambio( 0 )

    }

    async function escribir() {
        await leer()
        let data  = datos
        // Buscar el mayor ID
        let mayor = 0
        data.forEach(element => {
            let id = parseInt( element["id"] )
            if ( id > mayor ) {
                mayor = id
            }
        });
        // sumar 1
        mayor = mayor + 1
        
        // Generar nuevo objeto JSON
        let obj = { "id" : mayor , "movie": "Progra Web", "country" : "Peru", "email" : "pp@ulima.edu.pe"}

        // Agregar al arreglo JSON
        data.push( obj)
        setDatos( data )

        // Llamar a escribir
        const opciones = {
            method : 'POST',
            body : JSON.stringify( data ),
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( '/api/archivos1/escribeArchivo', opciones)
        data = await request.json()
        console.log( data)

        setFlagCambio( 1 )

    }

    // El uso de useEffect
    useEffect( () => {
        // Lo que esta aqui se ejecuta en el 1er renderizado
        leer()
        console.log("Hola")
    }, [ flagCambio ])

    return(
        <Layout content={
            <>
            <h1>EJemplo de useEffect</h1>
            <button onClick={leer}>Leer</button>
            <button onClick={escribir}>Escribir</button>
            <ul>
                {
                    datos.map ( dato => (
                        <li key={dato.id}>{dato.id} - {dato.movie} - {dato.country} </li>
                    ))
                }
            </ul>          
            </>
        }
        ></Layout>
    )

}

export default MiComponente
