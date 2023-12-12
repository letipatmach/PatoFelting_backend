import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";
import { manejarErrores } from "./middlewares/manejarErrores.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import {getListadoArticulo} from "./controladores/getListadoArticulo.js"
import { getNovedades } from './controladores/getNovedades.js';
import { getOfertas } from './controladores/getOfertas.js';
import {getCategorias} from './controladores/getCategorias.js';
import { getDetalleArticulo } from './controladores/getDetalleArticulo.js'; 
import { getListadoSugerencia } from './controladores/getListadoSugerencia.js';
import { getListadoImagen } from './controladores/getListadoImagen.js';
//sincronizando de nuevo a ver si funciona cambio nombre archivo
 

//me conecto a mi BD
await conectarDB();

const app = express();

const port = 3000;

//------------------------------------------------MIDDLEWARES----------------------------------------------------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(mostrarDatosRequest);




//-------------------------------------------------ENDPOINT------------------------------------------------------------------------------

//muestro artículos en novedades
app.get("/novedades", getNovedades);
//muestro articulos de oferta
app.get("/ofertas", getOfertas);
//muestro categorias
app.get("/categorias", getCategorias);
//muestro listado de artículos
app.get("/listaArticulos", getListadoArticulo);

//muestro detalle articulo
app.get("/detalleArticulo/:idArticulo", getDetalleArticulo);
//muestro listado de imagenes
app.get("/listaImagen", getListadoImagen);
//muestro listado de Sugerencia
app.get("/sugerencia", getListadoSugerencia);
 


















//-------------------------------------------------INICIA SERVIDOR------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}!`);
  });
  

  app.get ("/",(req,res) => {res.send ("Hellow")})