const{Router} = require ('express');
const router = Router();
const { getUsers, getUsersByName, createUser, updateUser, updateEmail, deleteUser, getUserById } = require('../controllers/user');

//Mismas funciones 
//router.get('/', (req, res) => getUsers(req, res));
router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/search', getUsersByName);
router.post('/', createUser );
router.put('/:id', updateUser);
router.patch('/id', updateEmail);
router.delete('/:id', deleteUser);

module.exports = router; 
