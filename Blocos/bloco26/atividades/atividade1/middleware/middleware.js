const { getAll, getUserByEmail, create, setUser } = require('../models/users');
const { isValid } = require('../middleware/validation');

const getUser = async (req, res) => {
  const user = await getAll();
  res.status(200).json(user);
};

const getId = async (req, res) => {
  const { id } = req.params
  const user = await getUserByEmail(id);
  res.status(200).json(user);
};

const verification = async (req, res, next) => {
  const { firstName, email, password, lastName } = req.body;
  if(!isValid(firstName, email, password, lastName)) return res.status(400).json({message: 'Invalid'});
  next();
}

const createNewUser = async (req, res) => {
  const { firstName, email, password, lastName } = req.body;
  await create(firstName, lastName, email, password);
  res.status(200).json({message: 'New user added successfully'});
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, email, password, lastName } = req.body;
  await setUser(id, firstName, lastName, email, password);
  res.status(200).json({message: 'New user edit successfully'});

}

module.exports = { getUser, getId, verification, createNewUser, updateUser};