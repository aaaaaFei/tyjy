var express = require('express');
var router = express.Router();
var dbModel = require('../model/infoModel')


/* GET users listing. */
router.get('/', function(req, res, next) {
        dbModel.find().exec(function(err,docs){
            console.log(docs)
            res.render('allInfo',{list:docs})
        })
});


module.exports = router;
