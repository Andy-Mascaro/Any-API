const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app('/movie', require('./controllers/movie'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
