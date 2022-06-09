const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const movieInfo = await Movie.getById(id);
    res.json(movieInfo);
  })

  .get('/', async (req, res) => {
    const movieList = await Movie.getAll();
    res.json(movieList);
  });
