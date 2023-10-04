import Link from "next/link"
import Head from 'next/head'
import Layout from '../components/Layout.js'

const Index = () => <Layout content={

    <>
        <div>
            <h1>Home Page o Welcome Page</h1>
            <Link href="pagina2">Ir a la pagina2</Link>
        </div>

    </>
} />

export default Index


