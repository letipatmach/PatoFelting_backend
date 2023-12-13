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
  altura;

  constructor(
    idArticulo = "",
    categoria = "",
    nombre = "",
    precio = "",
    novedad = "",
    descuento = "",
    porcentajeDto = "",
    descripcion = "",
    imagenPorDefecto = "",
    altura=""
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
    this.altura = altura;
  }
}
