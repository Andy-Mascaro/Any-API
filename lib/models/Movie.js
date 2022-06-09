const pool = require('../utils/pool');

module.exports = class Movie {
  id;
  name;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.year = row.year;
    this.rank = row.rank;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM movie;');
    return rows.map((row) => new Movie(row));
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM movie WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Movie(rows[0]);
  }
};
