const router = require('express').Router();
const { getUser, getId } = require('../middleware/middleware');
const { isValid } = require('../middleware/validation');

router.get('/users', getUser);
router.get('/users/:id', getId);
router.put('/users/new', isValid);

module.exports = router;