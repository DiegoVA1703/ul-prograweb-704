'use client'
import { useRouter } from 'next/navigation'

import Layout from '../components/Layout.js'

export default function EjemploPArams() {
    const router = useRouter()

    return ( <Layout content={
        <>
            <br></br>
            <button type="button" onClick={() =>{
                router.push("/pagina2")
            }}>Listado de Pokemones </button>
        </>
    }
    ></Layout>
    )
}