const { clear } = require("console");
const fs = require("fs");
//JSON.parce --> string => objeto
//JSON.stringify--> objeto=> string

fs.readFile("./package.json", "utf-8", (error, contenido) => {
  if (error) throw new Error("Hubo un error: ${error.message}");
  const info = {
    contenidoStr: contenido,
    contenidoObj: JSON.parse(contenido),
    size: contenido.length,
  };
  console.log(info);

  fs.writeFile("./info.txt", JSON.stringify(info, null, 4), (error) => {
    if (error) throw new Error("hubo un error: ${error.messaje}");
    console.log("archivo creado correctamente");
  });
});