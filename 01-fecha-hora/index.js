const fs = require("fs");

try {n
  fs.writeFileSync("./fyh.txt", new Date().toString());
  const contenido = fs.readFileSync("./index.js", "utf-8");
  console.log(contenido);
} catch (err) {
  throw new Error("Hubo un error: ${err.message}");
}
