const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mern-crud-test';

mongoose.set('strictQuery', true);
mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error('no se conectp'));

module.exports = mongoose;