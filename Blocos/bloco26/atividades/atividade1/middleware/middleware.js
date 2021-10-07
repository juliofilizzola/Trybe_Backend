const { getAll } = require('../models/users');

const getUser = async (req, res) => {
  const user = await getAll();
  res.status(200).json(user);
};

module.exports = { getUser };