export class RespuestaArticulo {
  idArticulo;
  categoria;
  nombre;
  precio;
  novedad;
  descuento;
  porcentajeDto;
  descripcion;
  imagenPorDefecto;

  constructor(
    idArticulo = number,
    categoria = "",
    nombre = "",
    precio = number,
    novedad = "",
    descuento = "",
    porcentajeDto = number,
    descripcion = "",
    imagenPorDefecto = ""
  ) {
    this.idArticulo = idArticulo;
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.novedad = novedad;
    this.descuento = descuento;
    this.porcentajeDto = porcentajeDto;
    this.descripcion = descripcion;
    this.imagenPorDefecto = imagenPorDefecto;
  }
}
