import { ModeloArticulo } from "../database/ModeloArticulo.js";
import { RespuestaArticulo } from "../respuesta/RespuestaArticulo.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";




export const getDetalleArticulo = (req, res, next) => {
  const idArticulo = Number(req.params.idArticulo);

  ModeloArticulo.findOne({ idArticulo: idArticulo })
    .then((data) => {
      if (!data) {
        throw Error(`No existe una Planta con el ID ${idPlanta}`);
      }

      const articulo = new RespuestaArticulo(
        data.idArticulo,
		data.categoria,
		data.nombre,
		data.precio,
		data.novedad,
		data.descuento,
		data.porcentajeDto,
		data.descripcion,
		data.imagenPorDefecto
      );

      return res.json(new RespuestaServidor(articulo));
    })
    .catch(next);
};


