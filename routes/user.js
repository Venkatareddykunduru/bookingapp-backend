const express = require('express');
const router = express.Router();

const usercontroller=require('../controllers/user.js');

router.get('/', usercontroller.getusers);
router.post('/adduser',usercontroller.adduser);
router.delete('/deleteuser/:name',usercontroller.deleteuser);


module.exports = router;