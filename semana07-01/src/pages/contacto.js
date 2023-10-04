import Layout from "@/components/Layout"
import { useState } from 'react'

const Formulario = () => {
    // acordarme del useState
    const [state, setState] = useState( 
                { email : "", message : ""}
                )

    function mngmtChange(e){
        console.log( e.target.name , e.target.value)
        setState( {...state, [e.target.name]  : e.target.value })
    }

    function mngmtSubmit(e) {
        e.preventDefault();
        let formData = new FormData()
        for ( let [key, value] of Object.entries(state)){
            formData.append( key, value )
        }

        console.log( formData )
        // Una ve que se ha cargado el FormData
        // se envia el formulario normalmente
        // usando fetch ... (T.B.D.)
    }

    const doGuardar = async () => {
        let formData = new FormData()
        for ( let [key, value] of Object.entries(state)){
            formData.append( key, value )
        }

        // aparenetement el formData no funciona bien
        let params = new Map( [] )
        formData.forEach( (value, key) => {
            params.set( key, value )     
        } )

        // Generar un Objeto JSON
        let jsonObject = {}
        params.forEach ( 
            (value, key) => { jsonObject[key] = value }
            )
        console.log( JSON.stringify(jsonObject))

        // Invocar a la API
        try {
            const req = await fetch(
                `/api/contactoAPI`,
                {
                    method: 'POST',
                    body: JSON.stringify( {jsonObject}),
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            const data = await req.json()
            console.log( data )
        } catch (err) {
            console.log(err)
        }
    }

    const doEscribir = async () => {
        let formData = new FormData()
        for ( let [key, value] of Object.entries(state)){
            formData.append( key, value )
        }

        // aparenetement el formData no funciona bien
        let params = new Map( [] )
        formData.forEach( (value, key) => {
            params.set( key, value )     
        } )

        // Generar un Objeto JSON
        let jsonObject = {}
        params.forEach ( 
            (value, key) => { jsonObject[key] = value }
            )
        console.log( JSON.stringify(jsonObject))

        // Invocar a la API
        try {
            const req = await fetch(
                `/api/contactoAPIArchivo`,
                {
                    method: 'POST',
                    body: JSON.stringify( {jsonObject}),
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            const data = await req.json()
            console.log( data )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={mngmtSubmit}>
                <p>Correo :
                    <input name="email" type="email"
                        placeholder="Ingresa tu correo"
                        onChange={mngmtChange}
                        value={state.email}
                        required />
                </p>
                <p>Mensaje :
                    <textarea name="message"
                        placeholder="Ingresa tu comentario"
                        onChange={mngmtChange}
                        value={state.message}
                        required />
                </p>
                <button type="submit">Enviar el Form</button>
                <button onClick={doGuardar}>Mostrar en JSON</button>
                <button onClick={doEscribir}>Grabar en archivo</button>
            </form>
        </>
    )
}


const Contacto = () => {
    return (<Layout content={
        <>        
        <div>
            <h1>Formulario de Contacto</h1>
            <Formulario />
        </div>
        </>

    }
    ></Layout>
    )
}

export default Contacto