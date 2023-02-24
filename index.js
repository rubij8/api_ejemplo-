// Hacer accesible variables de entorno declaradas en el archivo ".env"
require('dotenv').config();

console.log(process.env.API_PORT); 
console.log(process.env.DB_ENGINE);
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_HOST);
console.log(process.env.DB_POOL_MAX);
console.log(process.env.DB_POOL_MIN);
console.log(process.env.DB_POOL_ACQUIRE);
console.log(process.env.DB_POOL_IDLE);
console.log(process.env.DB_FREEZETABLENAME);
console.log(process.env.DB_LOGGING);
console.log(process.env.DB_SCHEMA);
console.log(process.env.DB_TIMESTAMPS);
