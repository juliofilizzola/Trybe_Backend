const router = require('express').Router();
const { getAll } = require('../models/users');

router.get('/users', async (req, res) => {
  const user = await getAll();
  res.status(200).json(user);
});

module.exports = router;