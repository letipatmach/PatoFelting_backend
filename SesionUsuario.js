let usuarioIngresado = false;

export class SesionUsuario {
  static guardarSesion() {
    usuarioIngresado = true;
  }

  static obtenerSesionActual() {
    //return usuarioIngresado;
    return true;
  }
    
  static finalizarSesionActual() {
    usuarioIngresado = false;
  }
}
