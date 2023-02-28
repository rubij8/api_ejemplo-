// Hacer accesible variables de entorno declaradas en el archivo ".env"
require('dotenv').config();

const express = require('express');//Importar libreria, paquete o dependencia 
const app = express();//Ejecutar libreria para crear servidor 
const db = require ('./config/db');

const{API_PORT, DB_ENGINE} = process.env;

db.sync().then(() => {
   console.log('BD Conectada .. :)');
   console.log(`SGBD: ${DB_ENGINE.toUpperCase() }`);
})
.catch((error) => {
   console.log(`Se ah encontado el siguiente error: :(${error}`);
});


//const port = +process.env.API_PORT;

  //signo de mas (+) indica que se convierten a numericos
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/saludo', (req, res) => {
    res.send('Hola Mario.... Ejemplo de ruta' );
});

app.listen(+API_PORT, () => {
  console.log(`Servido escuchando en el puerto: ${API_PORT}`);
});