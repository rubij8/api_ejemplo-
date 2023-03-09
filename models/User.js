const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
    id:{
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: Sequelize.STRING(60), 
    lastname:Sequelize.STRING(50),
    description: Sequelize.TEXT,
    email: {
        type: Sequelize.STRING(50), 
        primaryKey: true,
        allowNull: false, 
        validate: {
            isEmail:{
                msg: 'Agregar un correo electrónico válido'
            }
        }, 
        unique: {
            msg: 'El correo eléctronico ya se encuentra registrado'
        }
    }, 
    clave: {
        type:Sequelize.STRING(60), 
        allowNull: false, 
        validate: {
            notEmpty:{
                msg: 'La contraseña no debe estar vacia'
            }
        }
    }, 
    status: {
        type: Sequelize.INTEGER, 
        defaultValue: 1
    }  
});


module.exports = User;

