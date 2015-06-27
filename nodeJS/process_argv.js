var arr=process.argv;
//获取命令行的参数 返回数组
// 第一个参数是node  第二个是路径  后续为你输入的参数
function add(arr){
	var count=0;
	for(var i=2;i<arr.length;i++){
		count+=Number(arr[i]);
	}
	return count;
}
console.log(add(arr));

