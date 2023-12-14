
import { ModeloCarrito } from "../database/ModeloCarrito.js";
import { RespuestaCarrito } from "../respuesta/RespuestaCarrito.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";




export const getDetalleCarrito = (req, res, next) => {
  const codigoVta = req.params.codigoVta;
  const filtros = {};   
  filtros.codigoVta =codigoVta;
  ModeloCarrito.find(filtros)
    .then((data) => {
      const articulo = data.map(
        (c) =>
          new RespuestaCarrito(
            c.idCarrito ,
            c.codigoVta ,
            c.usuario   ,
            c.idArticulo,
            c.cantidad  ,
            c.precio    ,
            c.total     ,
            c.rutaImagen,
            c.nombre    ,
            c.altura    
            
          )
      );
      return res.json(new RespuestaServidor(articulo));
    })
    .catch((error) => {
      next(error);
    });
};


