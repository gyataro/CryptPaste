const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../../.env` });

const configs = {
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT, 10) || 3000,
    LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

    PASTE_URL_HASH_SALT: process.env.URL_HASH_SALT || '',
    PASTE_URL_HASH_LENGTH: parseInt(process.env.URL_HASH_LENGTH, 10) || 8,
    PASTE_URL_HASH_LO: parseInt(process.env.URL_HASH_LO, 10) || 65536,
    PASTE_SECRET_COST_FACTOR: parseInt(process.env.PASTE_SECRET_COST_FACTOR, 10) || 8,

    CLIENT_URL: process.env.CLIENT_URL || 'localhost:3000'
};

module.exports = configs;