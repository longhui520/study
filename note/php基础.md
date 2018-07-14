#php基础
##2018.07.11
- 变量
  - 以$来标识变量，变量名必须是字母，数字，下划线
  - unset(变量)删除变量
  - 可变变量  $$v
    > 通过一个变量访问另一个变量
- 预定义变量
   变量|含义
   -|-|-
   $_GET|接收get提交的信息
   $_POST|接收post提交的信息
   $_REQUEST|接收get或post提交的信息
   $_SERVER|服务器相关信息
   $_COOKIE|一种会话技术
   $_SESSION|一种会话技术
   $_FILES|接收用户上床的文件信息
   $_GLOBAL|记录全局变量

##2018.07.12
- php数据类型
  + 标量 整数 浮点数 布尔 字符串 
  + 复合数据类型 对象 数组
  + 特殊类型 null 
  + resource 
- 字符串
  + 单引号字符串 转义叫弱 能转义 \\ \' 变量不能解析其值
  + 双引号字符串 转义较强 能转义\\" \t \\ \n 等 变量能能被解析
  + 转义符 '\' 
  + {}规定解析变量的范围 
  + 定界符 >>>EOF EOF
- 数组
  + 索引数组
  + 关联数组
  + 在字符串中使用数组，不用花括号则数组的键不用加引号，使用花括号则加
- 数据类型转换
  + 自动转换
  + 强制转换
    * (integer float array object string boolean)变量
- 数据类型判断
  + is_int is_string is_bool is_object is_float is_resource is_null
  + is_scalar 
##2018.07.13
- apicloud 页面的传值
- apicloud 数据请求
- php 常量
  - define('长量',值)
  - const 长量名=值
##2018.07.14
- 进制转换函数
  + dec bin oct hex decbin