//GET, POST, PUT, DELETE

//{prptocolo}://{hostname}:{port}/{ruta del recurso}?{parametros de bisqueda}
// http://localhost:8080/api/productos?foo=bar

const express = require("express");

const PORT = process.env.PORT || 8080;
const frase = "hola mundo como estan?";

const app = express();

app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

app.get("/api/letras/:num", (req, res) => {
  const { num } = req.params;
  if (isNaN(+num))
    return res.json({ error: "el parametro debe ser un numero" });
  if (+num < 1 || +num > frase.length)
    return res.json({ error: "el parametro esta fuera de rango" });
  res.json({ letra: frase[+num - 1] });
});

app.get("/api/palabras/:num", (req, res) => {
  const { num } = req.params;
  if (isNaN(+num))
    return res.json({ error: "el parametro debe ser un numero" });
  const palabras = frase.split(" ");
  if (+num < 1 || +num > palabras.length)
    return res.json({ error: "el parametro esta fuera de rango" });

  res.json({ palabras: palabras[+num - 1] });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and runing on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});

//rutas
//get

//params, query y body del objeto => req
