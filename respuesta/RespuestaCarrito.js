export class RespuestaCarrito {
  idCarrito ;
  codigoVta ;
  usuario   ;
  idArticulo;
  cantidad  ;
  precio    ;
  total     ;
  rutaImagen;
  nombre    ;
  altura    ;

  constructor(
    idCarrito ="",
    codigoVta ="",
    usuario   ="",
    idArticulo="",
    cantidad  ="",
    precio    ="",
    total     ="",
    rutaImagen="",
    nombre    ="",
    altura    =""
  ) {
    this.idCarrito =idCarrito ;
    this.codigoVta =codigoVta ;
    this.usuario   =usuario   ;
    this.idArticulo=idArticulo;
    this.cantidad  =cantidad  ;
    this.precio    =precio    ;
    this.total     =total     ;
    this.rutaImagen=rutaImagen;
    this.nombre    =nombre    ;
    this.altura    =altura    ;
  }
}
