//    导入 fs 模块，来操作文件
const fs = require('fs')

//    调用 fs.readFile() 方法读取文件
//    参数1：必选参数，读取文件的存放路径
//    参数2：可选参数，读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：必选参数，回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
  // 2.1 打印失败的结果
  // 如果读取成功，则 err 的值为 null
  // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
  console.log(err)
  console.log('-------')
  // 2.2 打印成功的结果
  console.log(dataStr)
})

//    调用 fs.writeFile() 方法，写入文件的内容
//    参数1：必选参数，表示文件的存放路径
//    参数2：必选参数，表示要写入的内容
//    参数3：可选参数，表示要写入的内容
//    参数4：必选参数，回调函数
fs.writeFile(__dirname + '/files/3.txt', 'ok123', function(err) {
  // 2.1 如果文件写入成功，则 err 的值等于 null
  // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
  // console.log(err)

  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})
