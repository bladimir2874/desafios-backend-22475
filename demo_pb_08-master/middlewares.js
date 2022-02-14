const express = require("express");
const loggerMiddleware = require("./middlewares/logger");
const authMiddleware = require("./middlewares/authorizer");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use([authMiddleware, loggerMiddleware]);
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  const html = `
  <h1>bienvenido ${req.user.name}</h1>
  <h2>HOME</h2>`;
  res.send(html);
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT</h1>");
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});
