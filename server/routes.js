const controller = require('./controllers/controller.js');
const router = require('express').Router();

router.get('/cows', controller.getCows);
router.post('/cows', controller.postCow);
router.put('/cows/:id', controller.editCow);
router.delete('/cows/:id', controller.deleteCow);

module.exports = router;
