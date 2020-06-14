const controller = require('./controllers/controller.js');
const router = require('express').Router();

router.get('/cows', controller.getCows);
router.post('/cows', controller.postCow);

module.exports = router;
