const Center = require('../models/Center');



function create(req, res){ 
    const user = new User();
    const params = req.body;

    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.age = params.age;  
    user.role = params.role;


 user.save((error, userCreated) => {
      if(error){
          res.status(500).send({
              statusCode : 500,
              message: "Error en el servidor"
          })
      }else{
          if(!userCreated){
              res.status(400).send({
                  statusCode: 400, 
                  message: "Error al insertar el usuario"
              })
    
          }else{  
              res.status(200).send({
                  statusCode: 200,
                  message :"Usuario alamacenado correctamente", 
                  dataUser: userCreated 
              })
          }
      }     
 })
}



function update(req,res){
   const parameters = req.body;
   const idUser = req.params.idUser;   

   User.findByIdAndUpdate(idUser , parameters, (error, userUpdated) => {
       if(error){
          res.status(500).send({
              statusCode: 500, 
              message: "Error en el servidor"
              
              
          })
       }else{
           if(!userUpdated){
               res.status(400).send({
                   statusCode: 400,
                   message: "Error al actualizar el usuario"
               })
           }else{
               res.status(200).send({
                   statusCode: 200,
                   message:"Usuario actaulizado correctamentes"
               })
           }
       }
   })
}


function remove(req, res){
     const idUser = req.params.idUser;

     User.findByIdAndDelete( idUser, (error, userRemoved) =>{
         if(error){
             res.status(500).send({
                 statusCode: 500, 
                 message:"Error en el servidor"
             })
         }else{
             if(!userRemoved){
                 res.status(400).send({
                     statusCode:400, 
                     message:"Error al eliminar el usuario"
                 })
             }else{
                 res.status(200).send({
                     statusCode:200,
                     message: "Usuario eliminado correctamente"
                 })
             }
         }
     } )
}
  
function getAllUsers(req, res){
    const role = req.params.role;
    User.find({ role: role}, (error, allUsers) => {
        if (error){
            res.status(500).send({
            statusCode: 500, 
            message: "Error al servidor"
            })
        }else{
            res.status(200).send({
                statusCode: 200, 
                message: "Todos los usuarios", 
                allUsers: allUsers
            })
        }
        })
    }



module.exports = {
    create,
    update, 
    remove,
    getAllUsers
     

}