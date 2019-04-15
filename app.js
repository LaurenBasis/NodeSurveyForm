const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const auth = require('./auth');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.post('/',function(req,res){
    console.log(req.body);
    auth.getcredentials();
});

router.get('/results',function(req,res){
  res.sendFile(path.join(__dirname+'/results.html'));
});

//can access items from this folder
app.use('/static', express.static(__dirname + '/Static'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');