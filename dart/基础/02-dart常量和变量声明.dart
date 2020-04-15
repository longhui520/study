/**
 * 1. 类型 变量名
 * 2. var 变量名 = 值
 * 3. final 变量名(常量)
 * 4. const 变量名(编译型常量)
 * 
 */
// 未赋值的变量值为null
var  a = 1;
int b = 2;
const c = 2;
final d = 4;
dynamic e =4;
Object f = 5;
// const 可以得到一个编译型字面量,并且非const final 声明的变量即使值是const得到的但是也可以修改
var g = const [1,2,3] ;