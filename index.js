// Hacer accesible variables de entorno declaradas en el archivo ".env"
require('dotenv').config();

const express = require('express');//Importar libreria, paquete o dependencia 
const app = express();//Ejecutar libreria para crear servidor 
const db = require ('./config/db');
const routerTest = require ('./routes/test');


const{API_PORT, DB_ENGINE} = process.env;
//Conexion a la base de datos
db.sync().then(() => {
   console.log('BD Conectada .. :)');
   console.log(`SGBD: ${DB_ENGINE.toUpperCase() }`);
})
.catch((error) => {
   console.log(`Se ah encontado el siguiente error: :(${error}`);
});

//Parseo de JSON
app.use(express.json());


//const port = +process.env.API_PORT;

  //signo de mas (+) indica que se convierten a numericos
//Rutas o endpoints de la REST API que estan expuestos 
app.use('/', routerTest);
app.use('/user', require ('./routes/users'));


//Configuración de puerto de la REST API 
app.listen(+API_PORT, () => {
  console.log(`Servido escuchando en el puerto: ${API_PORT}`);
});