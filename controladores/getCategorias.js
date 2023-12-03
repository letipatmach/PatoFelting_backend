import { ModeloCategoria} from "../database/ModeloCategoria.js";
import { RespuestaCategoria } from "../respuesta/RespuestaCategoria.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";




export const getCategorias = (req, res, next) => {

  ModeloCategoria.find()
    .then((data) => {
      const categoria = data.map(
        (c) =>
          new RespuestaCategoria(
            c.idCategoria,
            c.nombreCategoria,
            c.imagenCategoria,
            
          )
      );
      return res.json(new RespuestaServidor(categoria));
    })
    .catch((error) => {
      next(error);
    });
};


