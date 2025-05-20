// Requerir módulos 
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// Inicializaciones 
const app = express()
dotenv.config()


// Configuraciones 
app.set('port',process.env.PORT || 3000)
app.use(cors())

// Middlewares
app.use(express.json())


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})


// exportar la instancia 
export default app


