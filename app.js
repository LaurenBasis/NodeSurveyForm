const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const auth = require('./auth');
const bodyParser = require('body-parser');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.post('/',function(req,res){
    console.log(req.body);
    auth.getcredentials(req.body,res);
});

router.get('/results',function(req,res){
  res.sendFile(path.join(__dirname+'/results.html'));
});

//parse data from form
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//can access items from this folder
app.use('/static', express.static(__dirname + '/Static'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');