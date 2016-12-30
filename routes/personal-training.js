var express = require('express');
var router = express.Router();
var services = {
        "service_id": "01102",
        "name":"One-on-One Training",
        "description":"Tailored specifically around your fitness goals, one-on-one personal training assures that you get the best from every workout routine. Stay on the right path with the support, guidance, and motivation that our certified personal trainers can provide.",
        "price_range":"PHP 1000 - PHP 2000",
        "img_src1" : "/images/PersonalTrainer.jpg"
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;