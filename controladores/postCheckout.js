
import { GeneradorId } from "../database/GeneradorId.js";
import { ModeloCheckout } from "../database/ModeloCheckout.js";

export const postlCheckout = (req, res, next) => {
  let nuevoId;

 
  GeneradorId.obtenerProximoId('Cliente')
    .then((idGenerado) => {
      nuevoId = idGenerado;      
      const instanciaCheck= new ModeloCheckout({      
          
        idCh: 	     nuevoId,
        codigoVta:   req.body.codigoVta   ,
        usuario :    req.body.usuario,
        direccion:   req.body.direccion,
        departamento:req.body.departamento, 
        ciudad: 	 req.body.ciudad, 
        celular: 	 req.body.celular, 
        montoTotal:  req.body.montoTotal

      });      
      return instanciaCheck.save();
    })
    .then(() => {
        res.send(`Nuevo Checkout`);
    })
    .catch(next);
};