const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const date = new Date();
  const hours = date.getHours();
  let response = "";
  if (hours >= 6 && hours <= 12) {
    response = "buenos dias";
  } else if (hours >= 13 && hours <= 19) {
    response = "buenas tardes";
  } else {
    res.end(response);
  }
});
/*const connectedServer = server.listen(PORT, () => {
      console.log(
        `Servidor activo y ejecutandose en puerto 8080: ${
          connectedServer.address().port
        }`
      );
    });*/

server.listen(PORT, () => {
  console.log(`Servidor activo y ejecutandose en puerto: ${PORT}`);
});
