#!/usr/bin/env node
const log4js = require('log4js');
const configs = require('../configs')

log4js.configure({
    appenders: { console: { type: 'console' } },
    categories: { default: { appenders: ['console'], level: `${configs.LOG_LEVEL}` } }
});

const logger = log4js.getLogger();

module.exports = logger;