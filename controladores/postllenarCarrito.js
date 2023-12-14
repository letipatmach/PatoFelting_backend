
import { GeneradorId } from "../database/GeneradorId.js";
import { ModeloCarrito} from "../database/ModeloCarrito.js";

export const postllenarCarrito = (req, res, next) => {
  let nuevoId;

 
  GeneradorId.obtenerProximoId('Cliente')
    .then((idGenerado) => {
      nuevoId = idGenerado;      
      const instanciaCarrito = new ModeloCarrito({       
        idCarrito: 	 nuevoId,
        codigoVta:   req.body.codigoVta ,
        usuario :    req.body.usuario,
        idArticulo:  req.body.idArticulo,
        cantidad: 	 req.body.cantidad,
        precio: 	   req.body.precio, 
        total: 	     req.body.total, 
        rutaImagen:  req.body.rutaImagen,
        nombre :     req.body.nombre,
        altura :     req.body.altura

      });

      
      return instanciaCarrito.save();
    })
    .then(() => {

      res.send(`Nuevo carrito Agregado`);
    })
    .catch(next);
};