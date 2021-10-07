const router = require('express').Router();
const { getUser, getId, verification, createNewUser } = require('../middleware/middleware');

router.get('/users', getUser);
router.get('/users/:id', getId);
router.post('/users/new', verification, createNewUser);

module.exports = router;