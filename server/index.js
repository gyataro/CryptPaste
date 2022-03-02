
const configs = require("./configs");
const logger = require('./loaders/logger');
const mongoose = require('./loaders/mongoose');

const app = require('./loaders/express');

app.listen(configs.PORT, () => logger.debug(`Listening on port ${configs.PORT}`));