const fs = require("fs");
// JSON.parse --> string => objeto
// JSON.stringify --> objeto => string

fs.promises
  .readFile("./info.txt", "utf-8")
  .then((contenido) => {
    const info = JSON.parse(contenido);
    console.log(info);

    const newPacakgeJson = info.contenidoObj;
    newPacakgeJson.author = "Coderhouse";

    fs.promises
      .writeFile(
        "./package.json.coder",
        JSON.stringify(newPacakgeJson, null, 2)
      )
      .then(() => console.log("Archivo creado correctamente!"));
  })
  .catch((error) => console.log(`Hubo un error: ${error.message}`));
