var express = require('express');
var router = express.Router();
var Bear = require('../models/bear');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({message: 'hooray! welcome to our api!'});
});
//所有数据
router.get('/bears', function (req, res, next) {
    Bear.find({}, function (err, bears) {
        if (err) {
            res.send(err);
        }
        res.json(bears);
    });
});
//插入一条数据
router.post('/bears', function (req, res, next) {
    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log(result);
        res.json({message: 'Bear created!'});

    })
});
//查询一个
router.get('/bears/:bear_id', function (req, res, next) {
    var bearId = req.params.bear_id;

    Bear.findById(bearId, function (err, bear) {
        if (err) {
            res.send(err);
        }
        res.json(bear);
    });
});
//更新一个
router.put('/bears/:bear_id', function (req, res, next) {
    var bearId = req.params.bear_id;

    Bear.findById(bearId, function (err, bear) {
        if (err) {
            res.send(err);
        }
        bear.name = req.body.name;
        bear.save(function (err, result) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Bear updated!'});
        });
    });
});
//删除一个
router.delete('/bears/:bear_id', function (req, res, next) {
    var bearId = req.params.bear_id;

    Bear.findByIdAndRemove(bearId, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted!'});
    });
});

module.exports = router;
