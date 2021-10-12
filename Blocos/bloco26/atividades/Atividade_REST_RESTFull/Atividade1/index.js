const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./router/router');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, () => console.log(`APP listening on port ${port}`));