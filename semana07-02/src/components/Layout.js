import Link from 'next/link'
import Head from 'next/head'

export default props => (
    <>
        <header>
            <div>
                &nbsp;
                <p>
                    <img src="/logo_texto.png" width="338" />
                        En el Pokédex Pokéfanaticos encontrarás información detallada sobre cada Pokémon existente. Para cada criatura podrás ver su información general, los lugares donde es posible atraparlo, los ataques / movimientos que puede aprender cuando aumenta de nivel, y finalmente información útil para utilizar este Pokémon para crianza.
                        A continuación, usaremos el tema de  Pokémon para aprender JavaScript
                </p>
                &nbsp;
            </div>
        </header>

        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/pagina2">Listado</a></li>
                <li><a href="/1useState">Estado con useState</a></li>
                <li><a href="/contextAPI">Ejemplo con useContext</a></li>
                <li><Link href="/acercade">Acerca default</Link></li>
                <li><Link href="/ejemplouseParam">Ejemplo useParam</Link></li>
                <li><Link href="/ejemplouseRouter">Ejemplo useRouter</Link></li>
                <li><Link href="/contacto">Formulario</Link></li>
                <li><Link href="/use/demo1">useEffect</Link></li>
                <li><Link href="/use/demo2">useEffect 2</Link></li>
            </ul>
        </nav>
        <main>
            {props.content}
        </main>
        <footer>
            <p>Ingenieria de Sistemas &copy; 2023-2 - Programacion Web 704</p>
        </footer>

    </>
) 