
const dotenv = require('dotenv');
const path = __dirname + '/test.env';
// console.log('012', path);
dotenv.config({path: path});
// console.log('setup', process.env.SQLITE_DB_PATH);