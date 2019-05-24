const mongoose = require('mongoose');
const config = require('../configs');

mongoose.Promise = global.Promise;

const url = config.get('MONGO_URL');
const db = config.get('MONGO_DABASE_NAME');

exports.connect = () => new Promise((resolve, reject) => {
  mongoose.connect(`${url}/${db}`);
  // , {
  //   useMongoClient: true,
  // });

  const { connection } = mongoose;
  connection.on('error', reject);
  connection.once('open', resolve);
});
