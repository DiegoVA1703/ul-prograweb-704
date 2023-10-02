import Link from "next/link";
import Head from 'next/head'
import Layout from '../components/Layout.js'

import { useDemoContext } from "./context/demo";

export default function Home() {
  const [estado, setEstado] = useDemoContext();
  return ( <Layout content={
    <>        
    <Head>
      <title>..:: COnfirmando useContext ::..</title>
    </Head>
      <div>
        <h1>Confirmando useContext ...</h1>

        <p>Estado actual : {estado}</p>
        <button
          onClick={() => {
            estado == "ON" ? setEstado("VERDE") : setEstado("AZUL");
          }}
        >
          Switch ON/OFF
        </button>
      </div>
    </>
  } ></Layout>
  );
}