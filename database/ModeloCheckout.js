import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaCheckout = new Schema({    
    idCh: 	     { type: Number },
    codigoVta:   { type: String } ,
    usuario :    { type: String },
    direccion:   { type: String },
    departamento:{ type: String }, 
    ciudad: 	 { type: String }, 
    celular: 	 { type: String }, 
    montoTotal:  { type: Number }
    
  });
  

export const ModeloCheckout = model("Checkout", schemaCheckout);