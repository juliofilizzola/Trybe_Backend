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

const setTalker = async (id, firstName, lastName, email, password) => {
  const dataUser = await getUserByEmail(id);
  const updateUser = getNewUser({
    id: dataUser.id,
    firstName,
    lastName,
    email,
    password
  });

  await connection()
    .then((db) => db.collection('users').updateOne(updateUser));
};

module.exports = { getAll, getUserByEmail, create, setTalker };