let pokemonesArray = [
  {
    nombre: "Pikachu",
    tipo: "Electrico",
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
  },
  {
    nombre: "Squirtle",
    tipo: "Agua",
  },
  {
    nombre: "Charmeleon",
    tipo: "Fuego",
  },
  {
    nombre: "Weedle",
    tipo: "bicho",
  },
  {
    nombre: "Charizard",
    tipo: "Fuego",
  },
];

const fireType = pokemonesArray.filter( element  => {
    return element.tipo === "Fuego";
});

console.log('New list : ', fireType);

