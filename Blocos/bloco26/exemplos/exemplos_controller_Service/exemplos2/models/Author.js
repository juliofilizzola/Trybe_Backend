const connection = require('./connection');
const { ObjectId } = require('mongodb')

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [ firstName, middleName, lastName ].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>{
      return authors.map(({ _id, firstName, middleName, lastName }) =>{
        return getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      }
      )
    })
};

const getAuthorById = async (id) => {
  const authorData = await connection()
    .then(db => db.collection('authors').findOne(ObjectId(id)))
  if(!authorData) return null;
  const { _id, firstName, middleName, lastName } = authorData;

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  })
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  await connection()
    .then((db) => db.collection('authors').insertOne({firstName, middleName, lastName}))

}

module.exports = {
  getAll,
  getAuthorById,
  create,
  isValid
};