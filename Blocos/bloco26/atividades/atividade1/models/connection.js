const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';


const connection = () => {
  return MongoClient.connect(MONGO_DB_URL)
    .then(db => db.collection('users'))
}