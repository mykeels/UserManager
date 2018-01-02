const mongoose = require('mongoose')
const logger = require('./logger')('db.js')

mongoose.connection.on('error', (err) => {
    logger.error(err)

    logger.warn('retrying in a second ...')

    setTimeout(() => mongoose.connect(process.env.DB_URL, { useMongoClient: true }), 1000)
})

mongoose.connection.on('connected', () => {
    logger.log('connected')
})

mongoose.connect(process.env.DB_URL, { useMongoClient: true })