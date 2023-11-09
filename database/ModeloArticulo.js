import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaArticulo = new Schema({    
    idArticulo: 	    { type: Number },
    categoria:  	    { type: String,  required: [true, "Categoría es requerida"  ] },
    nombre:     	    { type: String,  required: [true, "Nombre es requerido"     ] },
    precio:     	    { type: Number,  required: [true, "Precio es requerido"     ] },
    novedad:    	    { type: String,  required: [true, "Novedad es requerido"    ] },
    descuento:        { type: String,  required: [true, "Descuento es requerido"  ] },
    porcentajeDto:    { type: Number,  required: [true, "Porcentaje es requerido" ] },
    descripcion:      { type: String,  required: [true, "Descripcion es requerida"] },
    imagenPorDefecto: { type: String , required: [true, "Imagen es requerida"] }
   
  
  });
  

export const ModeloArticulo = model("Articulo", schemaArticulo);