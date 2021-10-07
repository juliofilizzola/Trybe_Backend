const { ObjectId } = require('mongodb');
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


module.exports = { getAll, getUserByEmail };