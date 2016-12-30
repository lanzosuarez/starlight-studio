var express = require('express');
var router = express.Router();
var services = {
        "service_id": "01102",
        "name":"One-on-One Training",
        "description":"Tailored specifically around your fitness goals, one-on-one personal training assures that you get the best from every workout routine. Stay on the right path with the support, guidance, and motivation that our certified personal trainers can provide. Every Personal Trainer   is Fitness First certified and takes pride in treating every client as an individual. We understand that different training methods suit different people. Excuses are a thing of the past as our Personal Trainers devise an exercise plan unique to your goal that makes you feel like a new person inside and out.",
        "price_range":"PHP 1000 - PHP 2000",
        "img_src1" : "/images/PersonalTrainer.jpg",
        "pt1": "/images/pt1.jpg",
        "pt1_name":"Melissa",
        "pt1_punchline": "If it doesn't challenge you, it doesn't change you",
        "pt2": "/images/pt2.jpg",
        "pt2_name":"Alejandro",
        "pt2_punchline": "Sweat is magic. Cover yourself in it daily to grant your wishes",
        "pt3": "/images/pt3.jpg",
        "pt3_name":"Cris",
        "pt3_punchline": "Surround yourself with people who build you up and inspire you not to give up",
        "reason" : "With Personal Training, you get individual attention from an expert who will draw up a training plan customized to get you results. You will have an expert by your side all the way who is certified and equipped with the best tools and knowledge to help you get accelerated results. At Starlight Studio, you learn from some of the best and most passionate trainers around; you get an education that can empower you to lead a healthy and fit lifestyle. Starlight Personal Trainers are highly qualified and take pride in treating every member as an individual. We understand that different training methods suit different people so no matter what your level of fitness or experience, a Personal Trainer can tailor a programme, show you best training practices and how to use gym equipment, inspiring and motivating you along the way. We have trainers who specialize in all areas of fitness including weight loss, injury rehabilitation, sports training, core and strength training. Working with a Personal Trainer is no doubt the fastest and safest way to get the results you want. Welcome to Personal Training by Starlight.",
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;