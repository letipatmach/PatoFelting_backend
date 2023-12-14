import { ModeloArticulo } from "../database/ModeloArticulo.js";
import { RespuestaArticulo } from "../respuesta/RespuestaArticulo.js";
import { RespuestaServidor } from "../respuesta/RespuestaServidor.js";
import { crearFiltroArticulo } from "../utiles.js";




export const getListadoArticulo = (req, res, next) => {
  const filtroCategoria     = crearFiltroArticulo(req.query.categoria);
  const filtroPrecioMininmo = req.query.precioMinimo;
  const filtroPrecioMaximo  = req.query.precioMaximo;
  const filtroTamano        = req.query.filtroTamano;
  const filtroDescuento        = req.query.filtroDescuento;
  console.log("Llega Categoria"+req.query.categoria)  
  console.log("Llega Precio Minimo"+req.query.precioMinimo)
  console.log("Llega Precio MAximo"+req.query.precioMaximo)
  console.log("Llega Tamano"+req.query.filtroTamano)
  console.log("Llega Descuento"+req.query.filtroDescuento)
  

  const filtros = {};
  //--- Filtro Categoria
  if (filtroCategoria) {
    filtros.categoria =filtroCategoria;
  }

  //---- Filtros Precios
  if(filtroPrecioMininmo && filtroPrecioMaximo){
    console.log("Existen ambos precios")
    filtros.precio ={ $gte: filtroPrecioMininmo, $lte: filtroPrecioMaximo}
  }else if( filtroPrecioMininmo ){
    console.log("Existe precio Minimo")
    filtros.precio ={ $gte: filtroPrecioMininmo }
  }else if( filtroPrecioMaximo ){
    console.log("Existe precio Maximo")
    filtros.precio ={ $lte: filtroPrecioMaximo}
  }else{
    console.log("NO Existen  precios")
  }

    //--- Filtro Tamaño
    if (filtroTamano) {
      filtros.altura =filtroTamano;
    }

    //--- Filtro Tamaño
    if (filtroDescuento) {
      filtros.descuento =filtroDescuento;
    }






console.log("Filtros"+filtros)

  ModeloArticulo.find(filtros)
    .then((data) => {
      const articulo = data.map(
        (c) =>
          new RespuestaArticulo(
            c.idArticulo,
             c.categoria,
            c.nombre,
            c.precio,
            c.novedad,
            c.descuento,
            c.porcentajeDto,
            c.descripcion,
            c.imagenPorDefecto,
            c.altura
            
          )
      );
      return res.json(new RespuestaServidor(articulo));
    })
    .catch((error) => {
      next(error);
    });
};


