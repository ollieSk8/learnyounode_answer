//异步I O 操作
var fs=require('fs');
//倒入io 操作fs模块

fs.readFile(process.argv[2],'utf8',function(err,data){
	if(err){
		console.log(err);
	}
	console.log(data.split('\n').length-1);
});
/*

	fs.readFile('fileStr','enconding',callback(err,data))
                文件路径     字符集      回调函数（错误，文件数据）
	1倒入文件操作模块
	2采用异步方式读取文件
	3，第一个参数为命令行里第二个参数  设定字符集为utf-8

	如果不设定字符集 data返回的是Buffer对象

	设定了 data返回的是字符串


*/
/*
官方参考

var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/