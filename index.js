// Hacer accesible variables de entorno declaradas en el archivo ".env"
require('dotenv').config();


const express = require('express');//Importar libreria, paquete o dependencia 
const app = express();//Ejecutar libreria para crear servidor 
const port = +process.env.API_PORT;
  //signo de mas (+) indica que se convierten a numericos
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/saludo', (req, res) => {
    res.send('Hola Mario.... Ejemplo de ruta' );
});

app.listen(port, () => {
  console.log(`Servido escuchando en el puerto: ${port}`);
});