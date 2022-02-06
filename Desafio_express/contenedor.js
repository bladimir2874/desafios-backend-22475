const fs = require("fs");

const readProducts = async () => {
  let file = fs.promises.readFile("./productos.txt", "utf-8");
  return file;
};
module.exports = class Contenedor {
  //Creando el constructor
  constructor() {
    this.archivo = [];
  }

  // Método para obtener todos los productos
  async getAll() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        return fileData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Método para obtener un producto random
  async getRandom() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        let random = Math.floor(Math.random() * fileData.length);
        return fileData[random];
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
