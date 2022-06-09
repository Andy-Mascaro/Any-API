const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { movie } = require('../data/movie');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/movie should return a list of movies', async () => {
    const res = await request(app).get('/movie');
    const expected = movie.map((film) => {
      return { id: film.id, name: film.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/movie/:id should return movie detail', async () => {
    const res = await request(app).get('/movie/1');
    const mulan = {
      id: '1',
      name: 'Mulan',
      type: 'Animated',
      year: 1998,
      rank: 10,
    };
    expect(res.body).toEqual(mulan);
  });
  afterAll(() => {
    pool.end();
  });
});
