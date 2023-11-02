import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";

export const manejarErrores = (error, req, res, next) => {
  console.error(
    "\x1b[31m",
    "Ha ocurrido un error en el servidor: ",
    error.stack
  );
  return res.status(500).json(new RespuestaServidor(error.message, true));
};
