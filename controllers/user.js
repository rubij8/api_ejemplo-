const User = require ('../models/User');
const{ OK,
       CREATED, 
       BAD_REQUEST, 
       NOT_FOUND,
       INTERNAL_SERVER_ERROR} = require ('../constants/index');
//Async asincronia debe llevarlo mara cada
exports.getUsers = async (req, res) => {
    try {
        //const totalUsers = await User.count();  Conteo (COUNT) de registros de la tabla users
        //const users = await User.findAll(); Muestra (select) todos los registros de la tabla users 
        //al count y rows se le ponen alias como totalusers, users  
        const {count: totalUsers, rows: users } = await User.findAndCountAll();
        //Equivalencia de la linea de abajo es  (user.length === 0)
        if(!users.length) {
            return res.status(NOT_FOUND).json({
                msg: 'No se ah encontrado resultado', 
                totalUsers,
                users
            });
        }
        
        //console.log('users');

        return res.status(OK).json({
            msg: 'Operación exitosa', 
            totalUsers,
            users
        });
    } 
    catch (error) {
        return res.status(INTERNAL_SERVER_ERROR),json({
            msg: 'Ha ocurrido un error inesperado, por favor contacte al administrador'
        });
    }
}
exports.getUserById = async (req, res) => {
    const { id } = req. params;
  

    try {
        const user = await User.findByPk(id);

        if(!user) {
            return res.status(NOT_FOUND).json({
                msg: `No se ah encontrado el usuario con el ID: ${ id }`, 
                user: {}
            });
        }


        return res.status(OK).json({
            msg:'Operación exitosa',
            user
        });
    } 
    
    catch (error) {
        return res.status(INTERNAL_SERVER_ERROR),json({
            msg:'Ha ocurrido un error, por favor contacte al administrador'

        });
        
    }
}


exports.getUsersByName = (req, res) => {
    console.log(req.query);
    res.send("Obteniendo usuarios... :)");
};

exports.createUser = async (req, res) =>{

    const user = (req.body); //Informasción que se recibe del postman
     //Manejo de excepciones donde se corrobora que la se inserto o no y porque no se realizo la inserción
   try {
        //throw new Error('Provocando un error inesperado');
        await User.create(user)
            .then((resp) => {
                const { id } = resp;
                //console.log(resp); otra forma de escribirse sin constante


                return res.status(CREATED).json({
                    msg: "Usuario creado correctamente.",
                    id
                });

            })
            .catch((error) => {
                //console.log(error.message);

                return res.status(BAD_REQUEST).json({
                    msg: "Petición incorrecta, favor de verificar"                    
                });
            });
   } 
   catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            msg: 'Ha ocurrido un error inesperado, favor de contactar con el administrador'
        });
   }
    //Forma de escribirse en un escenario perfecto  sin sabes si se ejecuto bien o no      
    //const { id } = await User.create(user);  //Representa un INSERT User.create
    //encapsular todo en una contante y la muestra con un console
    //console.log(newUser);
    
    //console.log('Hola, ANTES de return...');

    //return res.send("Usuario  creado Estrellita 1"); //Corta la ejecuación del programa 
    //return res.status(CREATED).json({
      //  msg: "Usuario creado correctamente.", 
        // Esta line aquival e la de abajo id: id, pero la propiedad y valos se obvian porque se llaman igual 
     //   id
  //  }); //Corta la ejecuación del programa 

    //console.log('Hola, despues de return...');

}
exports.updateUser = async (req, res) => {
    try {
        const{ id } = req.params;
        const {name, lastname} = req.body;
        
        const user = await User.findByPk(id);

        //console.log(user); //null
        console.log(user ? true : false); //false (evalua)
        //console.log(user); //true (evalúa e invierte valor)
        //console.log(user); //false (evalúa e invierte valor) 

        if(!user) {
            return res.status(NOT_FOUND).json({
                msg:`No se ah encontrado el usuario con el ID: ${ id }`, 
                user:{}
            });
        }

        user.name = name ;
        user.lastname = lastname;
        await user.save(); 

        return res.status(OK).json({
            msg: `El usuario ${ user.id} se ah actualizado correctamente.`
            
        });

    }   

    catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            msg:'Ha ocurrido un error inesperado, por favor contacte con el administrador'
        });    
    }
}

exports.updateEmail = async (req, res) => {
    try {
        const{ id } = req.params;
        const {email} = req.body;
        
        const user = await User.findByPk(id);

        //console.log(user ? true : false); //false (evalua)
       
        if(!user) {
            return res.status(NOT_FOUND).json({
                msg:`No se ha encontrado el usuario con el ID: ${ id }`, 
                user:{}
            });
        }

        user.email = email;
        await user.save(); 

        return res.status(OK).json({
            msg: `El usuario ${ user.id} se ha actualizado correctamente.`
            
        });

    }   

    catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            msg:'Ha ocurrido un error inesperado, por favor contacte con el administrador'
        });    
    }
}
exports.deleteUser = async (req, res) => 
{
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if(!user) {
            return res.status(NOT_FOUND).json({
                msg: `No se ha encontrado el usuario ${id}`
            })
        }
        await user.destroy(); 

        return res.status(OK).json({
            msg: `Se ha eliminado el usuario ${ user.id} correctamente.`    
        });

    } 
    catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            msg:'Ha ocurrido un error inesperado, por favor contacte con el administrador'
        }); 
    }
}

