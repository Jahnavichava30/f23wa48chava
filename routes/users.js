var express = require('express');
var router = express.Router();

let sum=0;
let more=0;

router.get('/computation', function(req, res, next){
  var x = req.x;
  if(!x){
    x = Math.random()*260;
  }
  res.send(`Math.floor(${x}) is:${Math.floor(x)}`);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  more++;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
