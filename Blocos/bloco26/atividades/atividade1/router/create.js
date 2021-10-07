const router = require('express').Router();
const { getUser } = require('../middleware/middleware');

router.get('/users', getUser);

module.exports = router;