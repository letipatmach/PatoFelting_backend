import { SesionUsuario } from "../SesionUsuario.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";

export const postSalirUsu = (req, res) => {
  SesionUsuario.finalizarSesionActual();

  return res.json(new RespuestaServidor("Sesión finalizada con éxito!"));
};
