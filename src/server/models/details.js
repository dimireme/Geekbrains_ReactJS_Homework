const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const DetailsShema = new Shema({
	name: { type: String },
	weight: {type: Number },
	height: {type: Number },
	id: {type: Number },
	base_experience: {type: Number }
});

const Details = mongoose.model('pokemonsdetails', DetailsShema);

module.exports = Details;