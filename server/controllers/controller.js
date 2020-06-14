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
      .saveOne(params)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('ERROR IN CONTROLLER POSTCOW', err);
        res.send('Oops soemthing went wrong!');
      });
  },

  editCow: (req, res) => {
    console.log(req.body.id);
    let id = req.body.id;
    let params = [req.body.name, req.body.description];
    models
      .updateOne(id, params)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log('ERROR IN CONTROLLER EDITCOW', err);
        res.send('Oops soemthing went wrong!');
      });
  },

  deleteCow: (req, res) => {
    // models.removeOne
  },
};
