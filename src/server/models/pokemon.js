const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const PokemonShema = new Shema({

});

const Pokemon = mongoose.model('pokemons', PokemonShema);

module.exports = Pokemon;
