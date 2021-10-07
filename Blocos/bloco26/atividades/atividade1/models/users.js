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
      }
      )
    })
};


module.exports = { getAll };