import { useState } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout.js'

const Ejemplo1 =  () => {
   
    const [cuenta, setCuenta] = useState(0)
    const contador = () => setCuenta( cuenta + 1)

    const [resta, setResta] = useState(99)
    const restador = () => setResta( resta - 1)

    const [saludo, setSaludo] = useState('Hola ')
    const saludar = () => setSaludo( saludo + "... Mundo ")

    return (
        <Layout content={
            <>
            <Head>
                <title>..::Ejemplo de useState::...</title>
            </Head>
            <section>
                <div>
                    <p>Se ha dado click {cuenta} veces</p>
                    <button onClick={contador}>Incrementar + </button>
                </div>
            </section>
            <aside>
            <div>
                    <p>Se ha dado click {resta} veces</p>
                    <button onClick={restador}>Restar - </button>
                </div>
                
            </aside>
            <section>
                <div>
                    <p>Se ha saludo {saludo} </p>
                    <button onClick={saludar}> Ejecutar saludo </button>
                </div>
            </section>
            </>
        }></Layout>
    )
}

export default Ejemplo1