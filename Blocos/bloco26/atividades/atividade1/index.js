const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/user');
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.use('/', router);

app.listen(port, () => console.log(`ouvindo na porta:  ${port}`))