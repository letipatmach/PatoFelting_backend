import mongoose from "mongoose";

const urlDatabase =process.env.DB_LINK;
  

export const conectarDB = () => {
  return mongoose
    .connect(urlDatabase)
    .then(() => {
      console.log("Conectado a la DB PatoFelting!");
    })
    .catch((error) => {
      console.log("Error conectando a la DB: ", error);
    });
};
