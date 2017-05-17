var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Schema
var bearSchema = new Schema({
    name: String
});
//创建Model
var Bear = mongoose.model('bear', bearSchema);

module.exports = Bear;