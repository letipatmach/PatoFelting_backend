import { ModeloArticulo } from "../database/ModeloArticulo.js";
import { RespuestaArticulo } from "../respuesta/RespuestaArticulo.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";




export const getNovedades = (req, res, next) => {

  ModeloArticulo.find({novedad:true})
    .then((data) => {
      const articulo = data.map(
        (c) =>
          new RespuestaArticulo(
            c.idArticulo,
             c.categoria,
            c.nombre,
            c.precio,
            c.novedad,
            c.descuento,
            c.porcentajeDto,
            c.descripcion,
            c.imagenPorDefecto,
            
          )
      );
      return res.json(new RespuestaServidor(articulo));
    })
    .catch((error) => {
      next(error);
    });
};


