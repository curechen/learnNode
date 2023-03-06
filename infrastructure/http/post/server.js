/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-03-06 10:37:23
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-03-06 10:38:31
 * @FilePath: \workplace\node\infrastructure\http\post\server.js
 * @Description: 
 */
const http = require("http");
const querystring = require("querystring");
const mysql = require("mysql");
const server = http.createServer((req,res)=>{

	let postVal = "";
  // post请求是流式传输，需要使用监听事件来接受数据
	req.on("data",(chunk)=>{
		postVal+=chunk;
	})
  // 接收完成
	req.on("end",()=>{
			
		let formVal = querystring.parse(postVal);
		let userName = formVal.userName;
		let userPwd = formVal.userPwd;
		

		const connection = mysql.createConnection({
			host:"localhost",
			user:"root",
			password:"root123",
			database:"demo1",
			port:3306
		})
		//数据库信息
		connection.connect();
		//连接数据库		
		connection.query("select * from user where userName=? and userPwd=?",[userName,userPwd],(err,results,fields)=>{
			if(err) throw err;
			if(results.length >0){
				res.writeHead(200,{'Content-Type':"text/html;charset=utf8"})
				res.write('登录成功')
				res.end();
			}
			
		})
		connection.end();
		
	})

})
server.listen(8080);