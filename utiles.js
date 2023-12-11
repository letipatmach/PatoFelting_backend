export const crearFiltroArticulo = (valor) =>
  valor ? new RegExp(valor, "gi") : undefined;

 