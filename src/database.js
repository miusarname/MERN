const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mern-crud-test';

mongoose.set('strictQuery', true);
mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error('no se conectp'));

module.exports = mongoose;
