import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";
import { SesionUsuario } from "../SesionUsuario.js";

export const controlarSesion = (req, res, next) => {
  if (SesionUsuario.obtenerSesionActual()) {
    next();
  } else {
    return res
      .status(401)
      .json(new RespuestaServidor("Acesso no autorizado", true));
  }
};
