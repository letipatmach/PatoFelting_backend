export class RespuestaCategoria {
  idCategoria;
  nombreCategoria;
  imagenCategoria;

  constructor(
    idCategoria = number,
    nombreCategoria = "",
    imagenCategoria = ""
  ) {
    this.idCategoria = idCategoria;
    this.nombreCategoria = nombreCategoria;
    this.imagenCategoria = imagenCategoria;
  }
}
