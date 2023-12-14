import { ModeloUsuario } from "../database/ModeloUsuario.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";

export const postRegistroUsu = (req, res, next) => {
  const nuevoNombreUsu = req.body.nombreUsu;
  const nuevoApellidoUsu = req.body.apellidoUsu;
  const nuevoEmail = req.body.email;
  const nuevaContrasenia = req.body.contrasenia;
  const repetirContrasenia = req.body.repetirContrasenia;

  if (guardarFormularioRegistro() == 0) {
    guardarFormularioRegistro();
  } else {
    ModeloUsuario.findOne({ email: nuevoEmail })
      .then((data) => {
        if (data) {
          throw new Error(`06-Ya existe un usuario con el email ${nuevoEmail}`);
        }

        const instanciaUsuario = new ModeloUsuario({
          nombreUsu: nuevoNombreUsu,
          apellidoUsu: nuevoApellidoUsu,
          email: nuevoEmail,
          contrasenia: nuevaContrasenia,
        });

        return instanciaUsuario.save();
      })
      .then(() => {
        return res.json(
          new RespuestaServidor(
            `Nuevo usuario agregado con email ${nuevoEmail}`
          )
        );
      })
      .catch(next);
  }
  
  //Validar formulario de registro
  //validar nombre
  function validarNombre() {
    let retorna = 0;
    if (nuevoNombreUsu == "") {
      throw new Error(`01-Debe completar campo Nombre`);
    } else {
      retorna = 1;
    }
    return retorna;
  }
  //Validar apellido
  function validarApellido() {
    let retorna = 0;
    if (nuevoApellidoUsu == "") {
      throw new Error(`02-Debe completar campo Apellido`);
    } else {
      retorna = 1;
    }
    return retorna;
  }

  //validar email
  function validarEmail() {
    let retorna = 0;
    if (nuevoEmail == "") {
      throw new Error(`03-Debe completar campo Email`);
    } else {
      retorna = 1;
    }
    return retorna;
  }
  //validar contraseña

  function validarContrasenia() {
    let retorna = 0;
    if (nuevaContrasenia == "") {
      throw new Error(`04-Debe completar campo Contraseña`);
    } else {
      retorna = 1;
    }
    return retorna;
  }
  //Validar Repetir contraseña

  function validarRepetirContrasenia() {
    let retorna = 0;
    if (repetirContrasenia !== nuevaContrasenia) {
      throw new Error(`05-Las contraseñas no son iguales`);
    } else {
      retorna = 1;
    }
    return retorna;
  }

  function guardarFormularioRegistro() {
    const arrayDatosValidados = [];
    let sepuede = 0;
    arrayDatosValidados.push(validarNombre());
    arrayDatosValidados.push(validarApellido());
    arrayDatosValidados.push(validarEmail());
    arrayDatosValidados.push(validarContrasenia());
    arrayDatosValidados.push(validarRepetirContrasenia());
    const validacionFinal = arrayDatosValidados.every((e) => e == 1);

    if (validacionFinal) {
      sepuede = 1;
    } else {
      sepuede = 0;
    }
    return sepuede;
  }
};
