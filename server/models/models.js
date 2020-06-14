const db = require('../../database');

module.exports = {
  getAll: () => {
    return db.queryAsync(`SELECT * FROM cows`);
  },

  saveOne: (params) => {
    return db.queryAsync(
      `INSERT INTO cows(name, description) VALUES(?, ?)`,
      params
    );
  },

  updateOne: (id, params) => {
    return db.queryAsync(
      `UPDATE cows SET name = ?, description = ? WHERE id = ${id}`,
      params
    );
  },

  removeOne: (id) => {
    return db.queryAsync(`DELETE FROM cows where id = ?`, [id]);
  },
};
