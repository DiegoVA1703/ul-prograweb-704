'use client'

import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

import Layout from '../../../../components/Layout.js'

export default function EjemploPArams() {
    const parametros = useParams()
    const path = usePathname()

    return ( <Layout content={
        <>
            <section>
                Ejemplo de uso de parametros
            </section>
            <aside>
                <ul>
                    <li>CATEGORIA: {parametros.categoria}</li>
                    <li>ID: {parametros.id}</li>
                    <li>PATH : {path}</li>
                </ul>
            </aside>
        </>
    }
    ></Layout>
    )
}