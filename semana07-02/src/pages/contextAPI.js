import Link from "next/link.js";
import Head from 'next/head.js'
import Layout from '../components/Layout.js'

import { useDemoContext } from "./context/demo.js";

export default function Home() {
  const [estado, setEstado] = useDemoContext();
  return ( <Layout content={
    <>        
    <Head>
      <title>..:: Ejemplo de useContext ::..</title>
    </Head>
      <div>
        <h1>Probando useContext ...</h1>

        <p>Estado actual : {estado}</p>
        <button
          onClick={() => {
            estado == "ON" ? setEstado("OFF") : setEstado("ON");
          }}
        >
          Switch ON/OFF
        </button>
      </div>
    </>
  } ></Layout>
  );
}