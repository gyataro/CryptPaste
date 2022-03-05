const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../../.env` });

const configs = {
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT, 10) || 3000,
    LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
    URL_HASH_SALT: process.env.URL_HASH_SALT || '',
    URL_HASH_LENGTH: parseInt(process.env.URL_HASH_LENGTH, 10) || 8,
    URL_HASH_LO: parseInt(process.env.URL_HASH_LO, 10) || 65536
};

console.log(configs);

module.exports = configs;