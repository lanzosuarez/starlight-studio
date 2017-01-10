var express = require('express');
var router = express.Router();

var Services = require('../models/services');

router.get("/:id", (req, res)=>{
    var serviceNo = req.params.id;
    Services.findOne({ serviceNo: serviceNo }, (err, doc)=>{
        if(err){
            return res.send("Error!");
        }
        res.locals.service_id = doc.serviceId;
        res.locals.name = doc.name;
        res.locals.price_range = doc.priceRange;
        res.locals.description = doc.description;
        res.locals.reason = doc.reason;
        res.locals.img_src = doc.img_src;
        res.locals.pt1 = doc.pt1;
        res.locals.pt2 = doc.pt2;
        res.locals.pt3 = doc.pt3;
        res.locals.pt1_name = doc.pt1_name;
        res.locals.pt2_name = doc.pt2_name;
        res.locals.pt3_name = doc.pt3_name;
        res.locals.pt1_punchline = doc.pt1_punchline;
        res.locals.pt2_punchline = doc.pt2_punchline;
        res.locals.pt3_punchline = doc.pt3_punchline;
        res.render('service');
    });
});

module.exports = router;