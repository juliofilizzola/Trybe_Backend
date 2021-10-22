const express = require('express');
const router = require('./router/router');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => console.log(`listen ON port: ${PORT}`));
