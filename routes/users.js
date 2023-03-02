const{Router} = require ('express');
const router = Router();


router.get('/search', (req, res) => {
    console.log(req.query);
    res.send("Obteniendo usuarios... :)");
});

router.post('/', (req, res) =>{
    console.log(req.body);
    res.send("Creando Usuario Estrellita 1");
});

router.put('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send('Usuario Estrellita 1 actualizado...');
});

router.patch('/id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send("Domicilio de Estrellita 1 actualizado ...");
})

router.delete('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send("usuarios Estrellita 1 eliminado ");
});


module.exports = router; 
