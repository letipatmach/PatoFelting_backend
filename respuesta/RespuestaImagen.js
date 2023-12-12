export class RespuestaImagen {
  idImagen;
  idArticulo;
  rutaImagen;

  constructor(
    idImagen = number,
    idArticulo =number,
    rutaImagen = ""
  ) {
    this.idImagen = idImagen;
    this.idArticulo = idArticulo;
    this.rutaImagen = rutaImagen;
  }
}
