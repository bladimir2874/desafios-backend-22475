const fs = require("fs");

const usuario = {
  name: "Jorge",
  lastname: "Malo",
};

const guardarUsuario = async (usuario) => {
  try {
    const usuarios = await fs.promises.readFile("./usuarios.txt", "utf-8");
    const arrayUsuarios = JSON.parse(usuarios);
    arrayUsuarios.push(usuario);
    await fs.promises.writeFile(
      "./usuarios.txt",
      JSON.stringify(arrayUsuarios, null, 2)
    );
    console.log(`Usuario ${usuario.name} agregado correctamente!`);
  } catch (err) {
    console.log(`Hubo un error: ${err.message}`);
  }
};

guardarUsuario({ name: "Vanessa", lastname: "Lozano" });
