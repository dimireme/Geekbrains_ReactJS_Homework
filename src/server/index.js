const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }).catch( (err) => {
	console.error('Failed to connect to DB on startup: ', err.message);
});

app.get('/', (req, res) => {
	res.send('Ok');
});

app.listen(3000);
