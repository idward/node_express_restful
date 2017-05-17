var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_bear');

var db = mongoose.connection;

db.on('open', function () {
    console.log('数据库已经连接');
});

db.on('error', function () {
    console.log('数据库连接错误');
});

module.exports = db;
