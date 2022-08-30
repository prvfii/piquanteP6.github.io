const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.signup = (req,res,next) =>{
    console.log(req.body)
    bcrypt.hash(req.body.password,10)
    .then(hash =>{
        const user = new User ({
            email: req.body.email,
            password: hash
           
        }); 
        console.log('user' + user)
        
        user.save()
        .then(()=> res.status(201).json({message : 'utilisateur crée'}))
        .catch(error =>{
            console.log(error)
            res.status(400).json({error})} )
    })
    .catch(error => res.status(500).json({error}))

    };
    
    exports.login = (req,res,next) =>{
    User.findOne({email : req.body.email})
    .then(user =>{
        if (user ===null ){
            res.status(401).json({messsage : 'PAire identifiant/mot de passe incorrect'})
        }else{
            bcrypt.compare(req.body.password , user.password)
            .then(valid =>{
                if (!valid) {
                    res.status(401).json({messsage : 'PAire identifiant/mot de passe incorrect'})
                }else {
                    res.status(200).json({
                        userId:user._id,
                        token : jwt.sign(
                            {userId : user._id },
                            process.env.secret_token,
                            {expiresIn : '24h'}
                        )
                    });
                }
            })
            .catch(error =>{
                res.status(500).json({error});
            })
        }
    })
    .catch(error =>{
        res.status(500).json({error});
    })
    };