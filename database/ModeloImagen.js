import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaImagen = new Schema({    
    idImagen: 	    { type: Number },
    idArticulo: 	    { type: Number },
    rutaImagen: { type: String , required: [true, "Imagen es requerida"] }
   
  
  });
  

export const ModeloImagen = model("Imagen", schemaImagen);