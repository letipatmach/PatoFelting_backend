import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";
import { manejarErrores } from "./middlewares/manejarErrores.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";


//me conecto a mi BD
await conectarDB();

const app = express();

const port = 3000;

//------------------------------------------------MIDDLEWARES----------------------------------------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(mostrarDatosRequest);

//-------------------------------------------------ENDPOINT------------------------------------------------------------------------------






















//-------------------------------------------------INICIA SERVIDOR------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}!`);
  });
  
