const Center = require('../models/Center');



function create(req, res){ 
    const center = new Center();
    const params = req.body;

    center.Name = params.Name;
    center.adress = params.adress;
    center.email = params.email;
    center.phone = params.phone;  
    center.latitude = params.latitude;
    center.longitude = params.longitude;

    center.save((error, centerCreated) => {
      if(error){
          res.status(500).send({
              statusCode : 500,
              message: "Error in the server"
          })
      }else{
          if(!centerCreated){ 
              res.status(400).send({
                  statusCode: 400, 
                  message: "Error creating the center"
              })
    
          }else{  
              res.status(200).send({
                  statusCode: 200,
                  message :"Center created successfully", 
                  dataUser: centerCreated 
              })
          }
      }     
 })
}



function update(req,res){
   const parameters = req.body;
   const idCenter = req.params.idCenter;   

   Center.findByIdAndUpdate(idCenter , parameters, (error, centerUpdated) => {
       if(error){
          res.status(500).send({
              statusCode: 500, 
              message: "Error in the server"
          })
       }else{
           if(!centerUpdated){
               res.status(400).send({
                   statusCode: 400,
                   message: "Error updating the center"
               })
           }else{
               res.status(200).send({
                   statusCode: 200,
                   message:"Center uptdated successfully"
               })
           }
       }
   })
}


function remove(req, res){
     const idCenter = req.params.idCenter;

     Center.findByIdAndDelete( idCenter, (error, centerRemoved) =>{
         if(error){
             res.status(500).send({
                 statusCode: 500, 
                 message:"Error in the server"
             })
         }else{
             if(!centerRemoved){
                 res.status(400).send({
                     statusCode:400, 
                     message:"Error deleting center"
                 })
             }else{
                 res.status(200).send({
                     statusCode:200,
                     message: "Center deleted successfully"
                 })
             }
         }
     } )
}
  
function getAllCenters(req, res){
    Center.find({}, (error, allCenters) => {
        if (error){
            res.status(500).send({
            statusCode: 500, 
            message: "Error in server"
            })
        }else{
            res.status(200).send({
                statusCode: 200, 
                message: "All the servers", 
                allCenters: allCenters
            })
        }
        })
    }



module.exports = {
    create,
    update, 
    remove,
    getAllCenters     

}