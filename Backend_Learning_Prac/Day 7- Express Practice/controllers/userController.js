const users = require('../modules/userModules');

//Getting the all users Data 
exports.getUsers = (req,res)=>{
    res.json(users);
}

//Getting a user through it's id in parameter
exports.getUserById =(req,res)=>{
    const userId =req.params.id;

    users.forEach((item)=>{
        if(item.id == userId){
            res.json(item);
            return;
        }
    })
}

//Post practice
exports.login=(req,res)=>{
    res.end("Hello! You just logged in.");
}

