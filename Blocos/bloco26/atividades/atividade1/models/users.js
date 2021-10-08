const { ObjectId } = require('mongodb');
const router = require('../router/user');
const connection = require('./connection');

const getNewUser = ({id, firstName, lastName}) => {
  const fullName = [ firstName, lastName ].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    lastName,
    fullName,
  }
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((authors) =>{
      return authors.map(({ _id, firstName, lastName }) =>{
        return getNewUser({
          id: _id,
          firstName,
          lastName,
        })
      });
    });
};

const getUserByEmail = async (id) => {
  const userData = await connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));
  if(!userData) return null;

  const { _id, firstName, lastName } = userData;

  return getNewUser({
    id: _id,
    firstName, 
    lastName
  });
}

const create = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({firstName, lastName, email, password}));
}

const setUser = async (id, firstName, lastName, email, password) => {
  const dataUser = await getUserByEmail(id);
  const updateUser = {
    id: id,
    firstName,
    lastName,
    email,
    password
  };

  const updatedResponse = await connection()
    .then((db) => {
      return db.collection('users').findOneAndUpdate({ _id: id }, { $set: updateUser }, { returnOriginal: true })
      .then((result) => result.value)
    });

  if (!updatedResponse) return null;
};

module.exports = { getAll, getUserByEmail, create, setUser };