const pokemones = ['Pikachu','Charmander','Bulbasaur','Squirtle'];

const upperPokemon = pokemones.map( element =>{
    return element.toUpperCase();
});

console.log('New list : ', upperPokemon);