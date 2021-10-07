const express = require('express');
const app = express();
const router = require('./router/create');
const port = 3000


app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.use('/', router);

app.listen(port, () => console.log(`ouvindo na porta:  ${port}`))