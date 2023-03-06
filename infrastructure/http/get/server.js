/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2022-09-09 14:13:11
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-03-06 11:04:46
 * @FilePath: \BaiduNetdiskDownload\09\demo1\server.js
 * @Description: 
 */
const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{

	res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
	const reqUrl = req.url;
	const formVal = url.parse(reqUrl,true).query;
	console.log(formVal.userName,formVal.userPwd);
	res.end("用户名:"+formVal.userName+"----->"+"密码:"+formVal.userPwd);
})

server.listen(8080);