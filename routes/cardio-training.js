var express = require('express');
var router = express.Router();
var services = {
        "service_id": "01314",
        "name":"Cardio Training",
        "description":"When someone mentions cardio, you may think necessary evil, but take a step back and withhold judgment for just a moment. As reluctant as you might be to hop on that treadmill—worried it'll be boring or that it'll zap your gains—give cardio a chance. When properly paired with weight training, a good cardio plan will lead you to an ideal world of fat loss and help you carve a great, shapely figure—which, of course, includes great glutes.Whether you want increased energy or reduced stress, cardio training (otherwise known as cardiovascular or CV training) helps you live a fitter life while strengthening your heart and lungs. From interval workouts to endurance exercises, cardio training can also help to lower blood pressure and cholesterol levels.",
        "price_range":"PHP 1000 - PHP 2000",
        "img_src1" : "/images/cardioTrain.jpg",
        "pt1": "/images/pt7.jpg",
        "pt1_name":"Lee",
        "pt1_punchline": "Some people want it to happen, some wish it would happen, others make it happen.",
        "pt2": "/images/pt8.jpg",
        "pt2_name":"Brook",
        "pt2_punchline": "For every person who doubts you, tell you that you will fail, try twice as hard to prove them wrong.",
        "pt3": "/images/pt9.jpg",
        "pt3_name":"Hannah",
        "pt3_punchline": "If you always do what you have always done, you will always get what you have always got .",
        "reason" : "Doing cardio has clear, in-your-face benefits for everyday life. Unfortunately, though, many people don't know what constitutes effective cardio. Gone is the day when you could run around town for a couple of miles and be healthy or look fit. Today’s “fit” man needs to be strong, fast, and athletic. An hour on the elliptical, a walk on a super-inclined treadmill, or a 10-mile jog in your neighborhood will not help you attain these qualities. This 45-minute interval-driven class features timed bursts of super-intense, cardio-strength intervals with a focus on chest, back, shoulders, triceps and biceps. You'll switch between 3 stations: 1) the SKILLMILL a non-motorised treadmill with an option for extra resistance, 2) a plyo-box for plyometric exercises like box-jumps and 3) a free-weight station for exercises with dumbbells or bodyweight. Each exercise round lasts 45 seconds. Class is open to all levels.",
    };
/* GET home page. */
router.get('/', function(req, res, next) {
  var templateData = services;
  res.render('service', templateData);
});

module.exports = router;