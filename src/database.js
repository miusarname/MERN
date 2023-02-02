const mongoose = require('mongoose');
const URI = 'mongodb://mongo:pRBWph8iCGpgCcuHGr78@containers-us-west-144.railway.app:7345';

mongoose.set('strictQuery', true);
mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error('no se conectp'));

module.exports = mongoose;
