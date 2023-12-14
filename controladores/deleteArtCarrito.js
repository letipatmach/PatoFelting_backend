 
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";
import {ModeloCarrito} from "../database/ModeloCarrito.js"

export const deleteArtCarrito = (req, res, next) => {
  const idCarrito = Number(req.params.idCarrito);

  ModeloCarrito.deleteOne({ idCarrito: idCarrito })
    .then((data) => {
      if (data.deletedCount !== 1) {
        throw new Error(`No existe ningun Carrito  con el ID ${idCarrito}`);
      } else {
        return res.json(
          new RespuestaServidor(`Carrito con ID ${idCarrito} eliminado con éxito`)
        );
      }
    })
    .catch(next);
};
