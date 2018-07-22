const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Pokemon = require('./models/pokemon');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).catch( (err) => {
	console.error('Failed to connect to DB on startup: ', err.message);
});

app.get('/', (req, res) => {
	res.send('Ok');
});

app.get('/pokemons', (req, res) => {
	Pokemon.find({}, (err, pokemons) => {
		if(err) return res.status(500).send(err.message);
		res.json(pokemons);
	})
});

app.get('/pokemon/:id', (req, res) => {
	Pokemon.findById(req.params.id, (err, pokemon) => {
		if(err) return res.status(500).send(err.message);
		res.json(pokemon);
	})
});

app.listen(3000);
