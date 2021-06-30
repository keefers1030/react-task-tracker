const Sequelize = require('sequelize')
const leadersModel = require('./leaders')
const config = require ('../config/sequelize')['development']

const connection = new Sequelize(config.database, config.username, config.password,
  { host: config.host, dialect: config.dialect })
const leaders = leadersModel(connection, Sequelize)

module.exports = { leaders }