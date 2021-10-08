const router = require('express').Router();
const { getUser, getId, verification, createNewUser, updateUser } = require('../middleware/middleware');

router.get('/users', getUser);
router.get('/users/:id', getId);
router.post('/users/new', verification, createNewUser);
router.put('/users/edit/:id', verification, updateUser);

module.exports = router;