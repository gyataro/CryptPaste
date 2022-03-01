const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../../.env` });

const configs = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT, 10),
    MONGO_URI: process.env.MONGO_URI,
    LOG_LEVEL: process.env.LOG_LEVEL
};

module.exports = configs;