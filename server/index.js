const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes.js');

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
