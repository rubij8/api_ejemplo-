require('dotenv').config();
//Se extrae la propiedas sequielize 
const { Sequelize } = require('sequelize');

 /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

const {DB_NAME,
       DB_USER,
       DB_PASS,
       DB_HOST, 
       DB_PORT, 
       DB_ENGINE
} = process.env;

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_ENGINE
});

  

