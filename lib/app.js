const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/movie', require('./controllers/movie'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
