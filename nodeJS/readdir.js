var fs=require('fs');
var path=require('path');

//异步读取文件夹里的文件

function printFile(pathUrl,extendName){
	//扩展名
	var exName='.'+extendName;
	//打开指定路径文件夹 callback 2个参数  错误和列表
	fs.readdir(pathUrl,function(err,list){
		if(err){
			console.log(err);
		}
		for(var i=0;i<list.length;i++){
			//返回path下的扩展名  例如 xxx.js  xxx.html
			if(path.extname(list[i])==exName){
				console.log(list[i]);
			}
		}
	});
}
printFile(process.argv[2],process.argv[3]);



/*
	官方答案
	var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/