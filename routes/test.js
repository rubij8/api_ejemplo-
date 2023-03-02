const{ Router }= require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hola estrellitas!');
});

router.get('/saludo', (req, res) => {
    res.send('Hola Mario.... Ejemplo de rutaen otro archivo' );
});

module.exports = router; 

