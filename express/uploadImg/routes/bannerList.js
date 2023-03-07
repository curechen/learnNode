var express = require('express');
var router = express.Router();
var db = require('../sql.js');


/* GET home page. */
router.get('/', function(req, res, next) {

    db.query('select * from banner',function (err,data) {

        if( err ){
            throw err;
        }else{
            res.render('bannerList',{bannerList:data})
        }

    })

});


module.exports = router;