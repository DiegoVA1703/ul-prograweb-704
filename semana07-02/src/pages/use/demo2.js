/*
Ejemplo usando useEffect y cargando toda la data
*/
import { useState, useEffect } from 'react'
import Layout from '../componentes/Layout'

const MiComponente = () => {
    const [datos, setDatos] = useState( [] )
    const [page , setPage] = useState( 1 )
    const [ totalPages, setTotalPages] = useState( 1 )

    async function leer() {
        const opciones = {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const request = await fetch( `/api/archivos3/leeArchivo?page=${page}`, opciones)
        let data = await request.json()
        console.log( data)
        
        setDatos( data.items )
        setTotalPages( data.totalPages)
    }

    const PrevPage = () => {
        if ( page > 1 ) {
            setPage( page - 1)
        }
    }

    const NextPage = () => {
        if ( page < totalPages) {
            setPage( page + 1)
        }
    }

    // El uso de useEffect
    useEffect( () => {
        // Lo que esta aqui se ejecuta en el 1er renderizado
        leer()
        console.log("Hola")
    }, [ page ])

    return(
        <Layout content={
            <>
            <h1>EJemplo de useEffect</h1>
            <button onClick={leer}>Leer</button>
            <button onClick={PrevPage} disable={page === 1}>Anterior</button>
            <button onClick={NextPage} disable={page === totalPages}>Siguiente</button>
            <p>Pagina {page} de {totalPages} </p>
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
