import { ModeloImagen } from "../database/ModeloImagen.js"
import { RespuestaImagen } from "../respuesta/RespuestaImagen.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";




export const getListadoImagen= (req, res, next) => {

  const filtroidArticulo = req.query.idArticulo;
  const filtros = {};
   if( filtroidArticulo ){
    filtros.idArticulo = filtroidArticulo
  }
  console.log(filtros)

  ModeloImagen.find(filtros)
    .then((data) => {
      const imagen = data.map(
        (c) =>
          new RespuestaImagen(
            c.idImagen,
            c.idArticulo,
            c.rutaImagen
          )
      );
      return res.json(new RespuestaServidor(imagen));
    })
    .catch((error) => {
      next(error);
    });
};


