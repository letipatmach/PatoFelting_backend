import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaCategoria = new Schema({    
    idCategoria: 	    { type: Number },
    nombreCategoria:     	    { type: String,  required: [true, "Nombre es requerido"     ] },
    imagenCategoria: { type: String , required: [true, "Imagen es requerida"] }
   
  
  });
  

export const ModeloCategoria = model("Categoria", schemaCategoria);