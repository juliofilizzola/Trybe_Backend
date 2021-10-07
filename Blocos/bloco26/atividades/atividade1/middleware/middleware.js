const { getAll, getUserByEmail } = require('../models/users');

const getUser = async (req, res) => {
  const user = await getAll();
  res.status(200).json(user);
};

const getId = async (req, res) => {
  const { id } = req.params
  const user = await getUserByEmail(id);
  res.status(200).json(user);
};


module.exports = { getUser, getId };