var express = require('express');
var router = express.Router();
var services = {
        "service_id": "01212",
        "name":"Freestyle Group Training",
        "description":"There’s nothing quite like engaging in a group workout. Our Freestyle Group Training is a seamless mix of the latest gym equipment and certified fitness staff who will guide you every step of the way. It’s a great way to give your entire body a workout and boost your overall fitness. Our Freestyle Group Training (FGT) is a combination of three-dimensional training movements that will challenge your muscles to move you in the way nature intended. Each of the challenging FGT classes are designed to help you reach your goals, whilst improving your everyday movement ability. This creates a workout that gives maximum results whilst making everyday activities easier to undertake. With FGT each workout is different. ",
        "price_range":"PHP 1000 - PHP 2000",
        "img_src1" : "/images/groupTrain.jpg",
        "pt1": "/images/pt4.jpg",
        "pt1_name":"Celana",
        "pt1_punchline": "Being defeated is often a temporary condition. Giving up is what makes it permanent.",
        "pt2": "/images/pt5.jpg",
        "pt2_name":"Dorian",
        "pt2_punchline": "To achieve something you’ve never had before, you must do something you’ve never done before.",
        "pt3": "/images/pt6.jpg",
        "pt3_name":"Sorscha",
        "pt3_punchline": "You are born weak and die weak, what you are in between those two periods of time is up to you.",
        "reason" : "A great workout that will cover all of the moves used in the other classes. By understanding the moves before you attend the other classes you can maximise your results!! This workout will challenge your core in three planes of motion. A three-dimensional core workout is the way to performing better in the gym. Push yourself to the limit with HIIT training. Designed to get results quickly by mixing short, intense bursts of exercise with short recovery periods. Learn to use the equipment to get stronger. Challenge your whole body with this strength workout. Using superset exercises and a mix of freestyle equipment to maximise your results. Our exclusive Signature Classes incorporate Dynamic Movement Training, with programmes designed around your body’s natural movement to help you increase strength, flexibility and all-round fitness. Achieve maximum results in minimum time. Use heavy equipment with explosive body weight exercise to increase your power.",
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;