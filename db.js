const mongoose = require('mongoose')
const logger = require('./logger')('db.js')

mongoose.connection.on('error', (err) => {
    logger.error(err)
})

mongoose.connect(process.env.DB_URL, { useMongoClient: true });