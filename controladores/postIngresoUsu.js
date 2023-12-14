import { ModeloUsuario } from "../database/ModeloUsuario.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";
import { SesionUsuario } from "../SesionUsuario.js";

export const postIngresoUsu = (req, res, next) => {
  let emailUsuario = req.body.email;
  let contraseniaUsuario = req.body.contrasenia;

  const errorUsuarioContrasenia = new Error(
    `03-Usuario y/o contraseña incorrectas`
  );
  if (guardarFormularioUsuario() == 0) {
    guardarFormularioUsuario();
  } else {
    ModeloUsuario.findOne({ email: emailUsuario })
      .then((usuario) => {
        if (!usuario) {
          throw errorUsuarioContrasenia;
        }

        if (contraseniaUsuario !== usuario.contrasenia) {
          throw errorUsuarioContrasenia;
        }

        SesionUsuario.guardarSesion();

        return res.json(new RespuestaServidor("Ingresó exitosamente!"));
      })

      .catch(next);
  }

  //Validar Formulario Usuario

  //validar usuario

  function validarUsuario() {
    let retorna = 0;
    if (emailUsuario == "") {
      throw new Error(`01-Debe completar campo Usuario`);
    } else {
      retorna = 1;
    }
    return retorna;
  }

  //validar contraseña

  function validarContrasenia() {
    let retorna = 0;
    if (contraseniaUsuario == "") {
      throw new Error(`02-Debe completar campo Contraseña`);
    } else {
      retorna = 1;
    }
    return retorna;
  }

  function guardarFormularioUsuario() {
    const arrayDatosValidados = [];
    let sepuede = 0;
    arrayDatosValidados.push(validarUsuario());
    arrayDatosValidados.push(validarContrasenia());
    const validacionFinal = arrayDatosValidados.every((e) => e == 1);

    if (validacionFinal) {
      sepuede = 1;
    } else {
      sepuede = 0;
    }
    return sepuede;
  }
};
