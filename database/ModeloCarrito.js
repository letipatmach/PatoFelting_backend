import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaCarrito = new Schema({    
    idCarrito: 	 { type: Number },
    codigoVta:   { type: String } ,
    usuario :    { type: String },
    idArticulo:  { type: String },
    cantidad: 	 { type: Number }, 
    precio: 	   { type: Number }, 
    total: 	     { type: Number }, 
    rutaImagen:  { type: String  },
    nombre :     { type: String  },
    altura :     { type: String  }  
  });
  

export const ModeloCarrito = model("Carrito", schemaCarrito);