const models = require('../models/models.js');

module.exports = {
  getCows: (req, res) => {
    models
      .getAll()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log('ERROR IN CONTROLLER GETCOW', err);
        res.send('Oops something went wrong!');
      });
  },

  postCow: (req, res) => {
    let params = [req.body.name, req.body.description];
    models
      .saveCow(params)
      .then((results) => {
        console.log('RESULTS FROM POSTING', results);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('ERROR IN CONTROLLER POSTCOW', err);
        res.send('Oops soemthing went wrong!');
      });
  },
};
