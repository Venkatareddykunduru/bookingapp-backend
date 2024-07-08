const User=require('../models/user.js');

exports.adduser=(req,res,next)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    User.create({
        name:name,
        phone:phone,
        email:email
    })
    .then(() => {
        console.log('User saved');
        res.status(200).json({ message: 'User Added successfully' });
      })
      .catch((err) => {
        console.log('Error Adding User: ' + err);
        res.status(500).json({ error: 'Failed to Add user' });
      });
}

exports.getusers=(req,res,next)=>{
    User.findAll()
    .then((data)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err)=>{
        console.log("error getting users: "+err);
        res.status(500).json({ error: 'Failed to retrieve users' });
    });
}

exports.deleteuser=(req,res,next)=>{
    const name=req.params.name;
    User.findByPk(name)
    .then((user)=>{
        return user.destroy();
    })
    .then(()=>{
        console.log('user deleted');
      res.status(200).json({ message: 'user deleted successfully' });
    })
    .catch((err)=>{
        console.log('Error deleting user: ' + err);
      res.status(500).json({ error: 'Failed to delete user' });
    });
}