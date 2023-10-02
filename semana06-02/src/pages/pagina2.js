import Link from "next/link"
import Head from 'next/head'
import Layout from '../components/Layout.js'

import pokedex from '../json/pokedex.json'

const Listado = () => <Layout content={
    <>
        <Head>
            <title>..:: Listado de Pokemones::.. </title>
        </Head>
        <h1>Listado desde el archivo</h1>
        <ul>
            {Object.entries(pokedex).map((value,index) => {
                return(
                    <li key={index}>
                        <Link href='/pokemon/[id]' 
                        as={ '/pokemon/' + value[0]} >
                            {value[1].nombre}
                        </Link>
                    </li>
                )
            } ) }
        </ul>
    </>

} />

export default Listado