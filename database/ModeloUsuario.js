import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaUsuario = new Schema({
  nombreUsu: { type: String, required: [true, "Nombre es requerido"] },
  apellidoUsu: { type: String, required: [true, "Apellido es requerido"] },
  email: { type: String, required: [true, "Email es requerido"], unique: true },
  contrasenia: { type: String, required: [true, "Contraseña es requerida"] },
});

export const ModeloUsuario = model("Usuario", schemaUsuario);
