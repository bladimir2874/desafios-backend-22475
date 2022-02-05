const express = require("express");
const PORT = process.env.PORT || 3030;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1 style=color:blue>Bienvenidos al servidor express</h1>");
});

let contador = 0;
app.get("/visitas", (req, res) => {
  contador++;
  res.send(`La cantidad de visitas es ${contador}`);
});

app.get("/fyh", (req, res) => {
  let date = new Date();
  let fyh = date.toLocaleString();
  res.send({ fyh });
});

app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando enel puerto, ${PORT}`);
});
