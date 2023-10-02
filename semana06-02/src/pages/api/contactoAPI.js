export default function otroEjemplito(req, res) {

    if ( req.method !== 'POST') {
        res.status(405).send( { message : "Solo funciona con POST !!"})

    } else if ( req.method == 'POST') {
        // Leer los valores recibidos
        console.log("BODY : " , req.body)
        const body = JSON.stringify(req.body).
                                    replace("'",'"')
        const params = JSON.parse(body)

        res.status(200).json( 
            {
               a : "Hola" , b :"Mundo", c: "NextJS" ,
               d : `${params['jsonObject'].email}`,
               e : `${params['jsonObject'].message}`
            }
        )
    }

}