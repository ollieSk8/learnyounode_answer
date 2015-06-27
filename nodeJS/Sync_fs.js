//同步I O操作
var fs=require('fs');
var buf=fs.readFileSync(process.argv[2]);
//同步读取文件路径的内容，返回一个Buffer对象

//调用toString()方法 可以拿到文件中的字符串
var content=buf.toString();

//转化成数组
var reArr=content.split('\n');

var hengShu=reArr.length-1;

console.log(hengShu);