var fs=require('fs');
var path=require('path');

module.exports=function(dir,ext,callback){
	fs.readdir(dir,function(err,list){
		if(err){
			//错误处理
			return callback(err);
		}
	    //如果没错误进行数据处理
		var dataList=[];
		list.filter(function(elem){
			var extName=path.extname(elem);
			if(extName==='.'+ext){
				dataList.push(elem);
			}
		});
		// 执行回调，并把数据当做参数传递给回调
		return callback(null,dataList);
	});
}