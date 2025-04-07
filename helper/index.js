const winston = require('winston');
const LokiTransport = require('winston-loki');

const logger = winston.createLogger({
    level: 'info', 
    format: winston.format.json(), 
    transports: [
        new LokiTransport({
            host: 'http://localhost:3100', 
            labels: { app: 'Location-Service'}, 
            json: true, 
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console(), 
    ],
});

module.exports = logger;
