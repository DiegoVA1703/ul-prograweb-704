import Layout from "@/components/Layout";

export default function test1() {
    var data;

    async function leer() {
        const opciones = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json'
            }
        }

        const peticion = await fetch('api/archivo1/leeArchivo1', opciones);
        data = await peticion.json();
        console.log(data);

        return data
    }

    async function escribir() {
        // Leer los datos actuales
        let data = await leer();
        console.log(data,'')

        // Encontrar el último ID
        let ultimoID = 0;
        if (data && data.length > 0) {
            data.forEach((elemento) => {
                if (elemento.id > ultimoID) {
                    ultimoID = elemento.id;
                }
            });
        }
        

        // Crear el nuevo elemento con un ID incremental
        let nuevoID = ultimoID + 1;
        let nuevo = { "id": nuevoID, "name": "Progra Web" };
        data.push(nuevo);

        // Decir que grabe el nuevo elemento
        const opciones = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const peticion = await fetch('api/escribeArchivo1', opciones);
        const respuesta = await peticion.json();
        console.log(respuesta);
    }

    return (
        <Layout content={
            <>
                <h1>Ejemplo de invocación a API</h1>
                <button onClick={leer}>Leer</button>
                <button onClick={escribir}>Escribir</button>
            </>
        }>
        </Layout>
    );
}
