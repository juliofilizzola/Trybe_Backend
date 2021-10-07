const router = require('express').Router();
const { getUser, getId } = require('../middleware/middleware');

router.get('/users', getUser);
router.get('/users/:id', getId);

module.exports = router;