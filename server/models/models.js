const db = require('../../database');

module.exports = {
  getAll: () => {
    return db.queryAsync(`SELECT * FROM cows`);
  },

  saveCow: (params) => {
    return db.queryAsync(
      `INSERT INTO cows(name, description) VALUES(?, ?)`,
      params
    );
  },
};
