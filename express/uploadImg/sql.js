/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-09-09 14:11:17
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-03-07 22:46:57
 * @FilePath: \BaiduNetdiskDownload\26\sql.js
 * @Description: 
 */
var mysql = require('mysql');
var db = mysql.createConnection({

   host:'localhost',
   user:'root',
   password:'1234',
   database:'demo'

});

db.connect();

module.exports = db;