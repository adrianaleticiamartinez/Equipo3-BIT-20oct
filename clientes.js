const { Router} = require('express');
const router = Router();
const _ = require('underscore');

const clientes = require('../csvjson.json');
const users1 = require('../sample.json');
//console.log(movies);

router.get('/',(req, res)=>{
    res.send(clientes);
});


router.post('/', (req,res)=>{
    //console.log(req.body);
    //const {title, director, year,rating}= req.body;
    const {usuario, auth, idCliente}= req.body;
    if (usuario && auth &&  idCliente){
        _.each(users1,(user1,i)=>{
            if(user1.usuario==usuario && user1.auth ==auth){
                if(user1.perfil=="Manager"){
                    res.send('manager');
                } else if (user1.perfil=="Validador"){
                    res.send('validador');
                } else if (user1.perfil=="Restringido"){
                    res.send('restringido');
                }
                
                /*let prueba = user.director
                if(user.director.length == 0){
                    prueba = "vacio"
                }
                res.json(prueba);
                res.send('siempre si');*/
            } 

    });
}
   
});


module.exports = router;