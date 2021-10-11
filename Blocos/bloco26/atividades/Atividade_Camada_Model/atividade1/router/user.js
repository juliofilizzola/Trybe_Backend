const router = require('express').Router();
const { getUser, getId, verification, createNewUser, updateUser, deleteUser } = require('../middleware/middleware');

router.get('/users', getUser);
router.get('/users/:id', getId);
router.post('/users/new', verification, createNewUser);
router.put('/users/edit/:id', verification, updateUser);
router.delete('/users/delete/:id', deleteUser);

module.exports = router;