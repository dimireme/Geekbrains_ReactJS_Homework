const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Pokemon = require('./models/pokemon');
const Details = require('./models/details');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).catch( (err) => {
	console.error('Failed to connect to DB on startup: ', err.message);
});

app.get('/', (req, res) => {
	res.json({
		message: 'Response from node server: ok'
	});
});

app.get('/pokemons', (req, res) => {
	Pokemon.find({}, (err, pokemons) => {
		if(err) return res.status(500).send(err.message);
		res.json(pokemons);
	})
});

app.get('/pokemons/:id', (req, res) => {
	Details.findOne({id: req.params.id}, (err, details) => {
		if(err) return res.status(500).send(err.message);
		res.json(details);
	})
});

app.listen(3000);
