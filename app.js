const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database.js');
const app = express();
const userRoutes=require('./routes/user.js');


app.use(cors());
app.use(bodyParser.json()); // For parsing application/json


app.use(userRoutes);


sequelize.sync()
.then((result)=>{
    //console.log(result);
})
.catch(err=>{
    console.log(err);
});

app.listen(3000);


