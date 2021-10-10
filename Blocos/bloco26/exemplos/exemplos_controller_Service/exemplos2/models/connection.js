const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, OPTIONS)
    .then((conn) =>  conn.db('model_example'))
    .catch((error) => {
      console.error(error);
      process.exit();
    })
};

module.exports = connection;