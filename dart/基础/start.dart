//单行注释
/**
 * 多行注释
 */
//应用程序入口main 函数
/// 这是一个文档注释，用来为库，类，以及它们的成员提供文档。
/// 像 IDEs 和 dartdoc 的工具会专门处理这些注释来生成文档。
/// 
// import 导入必须卸载声明之前
// import 'dart:math'; 导入dart 的库
// import 'package:test/test/test.dart'; 导入包 
// import 'test.dart'; 导入文件
void main(){
  print('hello,world');//顶级函数print 打印输出字符串到控制台
  //变量
  var name = '小明';
  var year = 10;
  var max = 1.1;
  var arr = ['aa','bb','dd'];
  var obj = {
    'aa':1,
    'bb':2,
    'cc':3
  };

  // 控制流程
  if(year > 2000){
    print('21th century');
  }else if(year>1900){
    print('20th century');
  }
  for(var v in arr){
    print(v);
  }
  for(var i=0;i<arr.length;i++){
    print(arr[i]);
  }
  while(max<100){
    max++;
  }
  do{
    max++;
  }while(max<200);
}
//函数
int fibnacci(int n){
  if(n == 1 || n==2){
    return 1;
  }
  return fibnacci(n-1) +fibnacci(n-2);
}
//箭头函数
var fn = (int a)=>a;
// import



