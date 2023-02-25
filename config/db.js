require('dotenv').config();
//Se extrae la propiedas sequielize 
const { Sequelize } = require('sequelize');

 /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { 
    host: process.env.DB.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_ENGINE
  });

  

