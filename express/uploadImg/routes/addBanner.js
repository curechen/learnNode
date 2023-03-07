/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-03-07 22:50:42
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-03-07 22:54:10
 * @FilePath: \workplace\node\express\uploadImg\routes\addBanner.js
 * @Description: 
 */
/**
 * 
  一般来说，可能会有一个专门上传图片的服务器，还有一个处理用户请求的服务器，当然这两者也可以是同一个

  上传图片的逻辑：

  1. 前端页面上传图片，然后请求后端接口
  2. 服务器拿到图片后进行保存，这个保存就是存储到图片服务器，然后因为图片保存到服务器之后会被重新分配一个名字，所以为了方便再次找到该图片，
    服务器会返回一个保存地址，服务器拿到返回地址后，会将该地址写入到数据库中，这样当你想要再次访问该图片时，只需要查数据库找到相应的地址，就可以在前端上显示出来
 */
var express = require('express');
var router = express.Router();
var db = require('../sql.js');
var multiparty = require('multiparty');

/* GET home page. */
router.post('/', function (req, res, next) {

  var form = new multiparty.Form();
  // 如果想要将图片保存到服务器上，那么必须设置 uploadDir，否则图片只会被保存到临时文件夹中，仅能在回调函数中调用，之后就会被删除
  form.uploadDir = './public/upload';
  // parse方法用来解析服务器接收到的图片数据，如果设置了 uploadDir，图片将会被保存到服务器上
  form.parse(req, function (err, fields, files) {
    var imgName = fields.imgName[0];
    //上传图片的路径
    var pic = files.pic[0].path;
    console.log(imgName);
    db.query('insert into banner value (?,?,?)', [0, imgName, pic], function (err, data) {

      if (err) {
        throw err;
      } else {
        db.query('select * from banner', function (err, data) {

          if (err) {
            throw err;
          } else {
            res.render('bannerList', { bannerList: data })
          }
        })
      }
    })

  })


});


module.exports = router;