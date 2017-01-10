var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Schema.Types.ObjectId},
    serviceId: {type: String, require: true},
    serviceName: {type: String, require: true},
    description: {type: String, require: true},
    serviceNo: {type: Number, require: true},
    priceRange: {type: String, require: true},
    img_src: {type: String, require: true},
    pt1: {type: String, require: true},
    pt1_name: {type: String, require: true},
    pt1_punchline: {type: String, require: true},
    pt2: {type: String, require: true},
    pt2_name: {type: String, require: true},
    pt2_punchline: {type: String, require: true},
    pt3: {type: String, require: true},
    pt3_name: {type: String, require: true},
    pt3_punchline: {type: String, require: true},
    reason: {type: String, require: true}
});

module.exports = mongoose.model('Service', schema);


