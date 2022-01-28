import express from 'express'
import cors from 'cors'
import {produtoRouter} from './rotas/produto-rotas'
import { db } from './database/db'

//porta do servidor
const PORT  = process.env.PORT || 4000

//host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http:localhost'

//App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Endpoint raiz 
app.get('/',(req,res)=> {
    res.send('Bem Vindo!')
}) 

//cors
app.use(cors({
  origin: ['http://localhost:4000']  
}))
//rotas
app.use('/api', produtoRouter)

//resposta padrão para qualquer outra requisição
app.use((req,res)=> {
    res.status(404)
})
// Inicia o sevidor
app.listen(PORT, async () => {
    await db.sync()
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})



