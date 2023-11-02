export class RespuestaArticulo {
  idArticulo;
  categoria;
  nombre;
  precio;
  novedad;
  descuento;
  pocentajeDto;
  descripcion;
  imagenPorDefecto;

  constructor(
    idArticulo = 0,
    categoria = "",
    nombre = "",
    precio = "",
    novedad = false,
    descuento = false,
    pocentajeDto = 0,
    descripcion = "",
    imagenPorDefecto = ""
  ) {
    this.idArticulo = idArticulo;
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.novedad = novedad;
    this.descuento = descuento;
    this.pocentajeDto = pocentajeDto;
    this.descripcion = descripcion;
    this.imagenPorDefecto = imagenPorDefecto;
  }
}
