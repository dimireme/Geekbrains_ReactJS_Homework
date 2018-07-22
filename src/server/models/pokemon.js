const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const PokemonShema = new Shema({
	name: { type: String },
	url: { type: String }
});

const Pokemon = mongoose.model('pokemons', PokemonShema);

module.exports = Pokemon;
