#!/usr/bin/env node
const configs = require('../configs');
const logger = require('./logger');
const mongoose = require("mongoose");

mongoose
    .connect(configs.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => logger.debug("Connected to database!"))
    .catch((err) => logger.error("Failed to connect to database:", err));