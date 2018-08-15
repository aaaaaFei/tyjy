var express = require('express');
var router = express.Router();
var dbModel = require('../model/infoModel')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/toPost', function(req, res, next) {
      var doc = new dbModel(req.body)
    console.log(doc)
      doc.save(function(err,doc){
          console.log(doc)
      })
      res.send('OK')
});

module.exports = router;
