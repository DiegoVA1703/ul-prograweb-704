import Link from 'next/link'

import Layout from '../components/Layout.js'

export default function listado() {

    return( <Layout content={
        <>
            <ul>
                <li><Link href="/blog/electrico/999/page">Ejemplo 1</Link></li>
                <li><Link href="/blog/programacion/web/page">Ejemplo 2</Link></li>
                <li><Link href="/blog/qwerty/98765abc/page">Ejemplo 3</Link></li>
                <li><Link href="/blog/20230001/alumnos/page">Ejemplo 4</Link></li>
            </ul>
        </>
    }
    ></Layout>

    )
}