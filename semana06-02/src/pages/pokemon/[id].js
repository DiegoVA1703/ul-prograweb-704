import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import pokedex from '../../json/pokedex.json'

export default () => {
    const router = useRouter()
    const p = pokedex[router.query.id]

    if (!p) return <p></p>

    return <Layout content={
        <>
            <head>
                <title>..::Detalle del Pokemon::...</title>
            </head>
            <h1>Pokemon</h1>
            <section>
                <h2>{p.nombre}</h2>
                <p>{p.clasificacion}</p>
            </section>
            <aside>
                <Image src={p.imagen2}
                    height={400}
                    width={400}
                    alt="Imagen del Pokemon"></Image>
            </aside>
        </>
    }
    />


}