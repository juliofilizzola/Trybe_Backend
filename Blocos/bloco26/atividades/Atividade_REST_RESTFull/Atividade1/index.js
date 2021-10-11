const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`APP listening on port ${port}`));