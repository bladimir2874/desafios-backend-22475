// Declaración de variables
const nombre = "pepe";
let edad = 25; // con let podemos tener reasignación en línea 22
const precio = 99.9;
const seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"]; // ejemplo de mutabilidad en línea 26
const peliculasFavoritas = [
  {
    nombre: "Transformers",
    releaseYear: 2007,
    protagonistas: ["Shia LaBeouf", "Megan Fox"],
  },
  {
    nombre: "Bohemian Raphsody",
    releaseYear: 2018,
    protagonistas: ["Rami Malek", "Gwilym Lee"],
  },
];

// Salida en consola
console.log(nombre);
console.log(edad);
console.log(precio);
console.log(seriesFavoritas);
console.log(peliculasFavoritas);

// incrementar edad
edad++;
console.log(edad);

// Agregar serie
seriesFavoritas.push("Game of thrones");
console.log(seriesFavoritas);
