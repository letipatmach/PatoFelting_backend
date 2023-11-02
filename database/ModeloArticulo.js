import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaArticulo = new Schema({
    idArticulo: { type: Number },
    categoria: { type: String, required: [true, "Categoría es requerida"] },
    nombre: {type: String, required: [true, "Nombre es requerido"],   unique: true,    },
    precio: { type: Number, required: [true, "Precio es requerido"] },
    novedad: { type: Boolean, required: [true, "Novedad es requerido"] },
    descuento: { type: Boolean, required: [true, "Descuento es requerido"] },
    porcentajeDto:{ type: Number, required: [true, "Porcentaje es requerido"] },
    Descripcion:{ type: String, required: [true, "Descripcion es requerida"] },
    imagenPorDefecto: { type: String },
   
  
  });
  

export const ModeloArticulo = model("Articulo", schemaArticulo);