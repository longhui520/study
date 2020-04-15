/**
 * 数值(num)(int,double)
 * 1. int 类型根据平台不同，取值范围也不同(Dart VM : -2^63 - 2^63-1,javascirpt:-2^53-2^53-1)
 * 2. double为双精度64位浮点型
 * 3. 数字字面量 11,0xEf 1.43e5
 * 4. 常用的方法 int.parse(str) double.parse(str) toString toStringAsFixed
 * 5. 数字是编译时常量；在算术表达式中，只要参与的计算因子都是常量。那么这个表达式结果也是编译时常量
 * 6. num 类型包括基本的 + - / * ~/ 以及abs() ceil() floor()等函数方法。其他处理可以用dart:Math
 */
var x = 1; //int 
var y = 1.1; //double
var hex  = 0xef;//16进制字符串
var b = 1.42e5; //指数表示
var one = int.parse('1'); //字符串转整形数字
var two = double.parse('1.1');//字符串转浮点型数字
var oneString = 1.toString();//数字转字符串
var piAsString = 3.1415926.toStringAsFixed(2);//数字转字符串保留2位数字

void main(List<String> args){
  print('hello world');
}
C
/**
 * 字符串(String)
 * 1. 有3种表示方法(一对单引号，一对双引号，一对3个单(双)引号(多行文本))
 * 2. 字符串中可以使用${exper}插值，或者$变量
 * 3.字符串之间用 +号连接
 * 4.字符串前加r为原始字符串(不会解析转义)
 */

/// 
/// 布尔值(bool)
/// 列表(List)
/// 映射(Map)
/// 集合(Set)
/// 符号(Symbol)
/// Runes(unicode 字符)
/// 