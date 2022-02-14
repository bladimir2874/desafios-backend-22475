//GET, POST, PUT, DELETE

//{prptocolo}://{hostname}:{port}/{ruta del recurso}?{parametros de bisqueda}
// http://localhost:8080/api/productos?foo=bar

const express = require("express");

const PORT = process.env.PORT || 8080;

const usuarios = [
  { id: 1, nombre: "bladimir" },
  { id: 2, nombre: "marcos" },
];
const app = express();
//middlewares
app.use(express.json());

//rutas
//get=> peticioones para obtener recursos
app.get("/api/usuarios", (req, res) => {
  const { nombre } = req.query;
  console.log(nombre);
  res.json(usuarios);
});

//params
app.get("/api/usuarios/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  console.log(req.params);
  const usuario = usuarios.find((usuario) => usuario.id === +idUsuario);
  res.json(usuario);
});

//params, query y body del objeto => req
//POST=> peticion para crear recursos
app.post("/api/usuarios", (req, res) => {
  console.log("peticion post recibida");
  console.log(req.body);
  res.json({ body: req.body });
});

//PUT peticion para buscar un recurso y modificar
app.put("/api/usuarios/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  const { nombre } = req.body;
  const indice = usuarios.findIndex((usuario) => usuario.id === +idUsuario);
  usuarios[indice] = {
    id: usuarios[indice].id,
    nombre: nombre,
  };
  res.json({ mensaje: "usuario actualizado" });
});

//DELETE
app.delete("/api/usuarios/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;

  const indice = usuarios.findIndex((usuario) => usuario.id === +idUsuario);
  usuarios.splice(indice, 1);
  res.json({ mensaje: "usuario eliminado" });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and runing on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
