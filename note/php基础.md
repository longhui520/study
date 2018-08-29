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
- **字符串**
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
  + dec bin oct hex decbin dechex decotc
- php 输出语句
  |函数|说明|返回值|
  |:-:|-------|---|
  |echo|只能输出变量数据类型，任何数据类型都要转化为字符串输出|  无返回值|
  |print|只能输出变量数据类型，对于任何数据都要转化为字符串输出| 1|
  |print_r|可以输出标量及复杂数据类型，但布尔值会被转换||
  |var_dump|主要用于程序员代码调试，可以输出十分详细的信息||
  |sprintf|可以用格式化符号%d %b %o %x %f %m.nf||
- php 站点建立
  + php -S localhost:端口号
  + php-cli  
  + php --m 查看加载的模块
  + php -help 查看帮助
- php 标签语法
  + 标准语法 <?php if():?><?php endif?> <?php for():?><?php endfor?>
  + 简化语法 <?php if(){?><?php }?> <?php for()}?><?php }?>
- 引入文件
  + include require include_once require_once
  + 可直接引入php文件或html模板文件
  + 在php文件中获取数据，html文件中显示数据
  + 引入文件路径 使用绝对路径或者相对访问的php文件的路径
  + require 在引入的文件出错的时候，不会往下执行，而include 则会继续执行
  + require 一般引入php文件 
  + \__FILE__ 和 \__DIR__不会随着被引入的文件而更改
- php错误分类
  + 编译错误
  + 执行错误
  + 逻辑错误  
  + 系统错误
    * E_error 致命错误
    * E_WRRING 警告错误
    * E_NOTICE 提示错误
    * E_PARSE 编译错误
    * E_ALL 全部错误
  + 自定义错误
    * E_USER_ERROR 用户定义的致命错误
    * E_USER_WARRING 用户定义的警告错误
    * E_USER_NOTICE 用户定义的提示错误
  + 自定义的错误
    * trigger_error(string,类型)
  + 错误的控制
    * php.ini
      * diplay_errors=on 
      * display_errors=off
      * error_report= 系统错误类型
      * init_set('error_report',错误类型)
    * 错误的日志位置在服务器上
    * 控制是否记录错误
      * log_error=on 
      * log_error=off
      * error_log 设置错误日志的位置
        * error_log=syslog
        * error_log=error.log
- each函数
  + 用于获取当前指针的键和值，并以索引元素与关联元素2中来标识，同时将指针下移一行
- list函数
  + list(var1,var2...)=$arr, 从数组中的索引元素依次赋值给变量列表中的变量
- foreach($arr as list($list1,$list2....))
##2018.07.15
- 字符串处理函数
  + strstr(str,substr) 查找字符串在字符串中首次出现的位置，并截取字符串
  + strrchr(str,substr) 查找子字符串在字符串中最后出现的位置，并截取字符串
  + strpos(str,substr) 查找字符串在字符串中首次出现的位置
  + strrpos(str,substr) 查找子字符串在字符串中最后出现的位置
  + explode('分隔符') 用指定的分隔符，来分隔字符串，并以数组返回  
  + str_replace(rep,serarch ,str) 在字符串中查找search 表示的部分，并替换成rep代表的内容
  + trim(str,[substr]),去除字符串两侧的字符
  + pathinfo($path,[option dirname basename extension filename])
  + md5(str) 用于对str字符串md5加密
  + htmlspecialchars(str) 输出字符实体
  + strlen(str) 获取字符串长度
  + mb_** 处理宽字符集的字符串 mb_sting.dll
  + str_repeat(str,n)
##2018.07.16
- api 
  > 应用程序接口
##2018.07.17
- php 数组处理
  + array_keys(arr) 获取数组的全部键值
  + array_values(arr)  获取数组的全部值
  + array_key_exists(arr,key) 判断是否有某个键
  + php.ini 中只有display_errors =off 才能直接判断是否有键
  + 生产阶段设置为off，开发阶段为on
  + isset()判断变量是否被设置，也可判断是否有键 ，会吞掉这个警告
  + empty() 判断变量是否为空或未设置
  + array_unique()
  + array_push $arrary[]
  + array_pop()
  + count()
  + in_array() 判断是否存在某个值
  + array_search() 在数组中搜索某个值
- 时间日期处理
  + time() 时间戳 格林威治时间1970 1月1日 0点0分0 秒 获取到的是秒数的时间戳
  + date(format,time) 格式化一个事件戳
  + date_default_timezone_set('RPC') 设置时区
  + strtotime(str) 将一个格式化时间转化为时间戳
- 文件操作
  + bassename()
  + file()
  + file_exists()
  + is_dir()
  + mkdir()
  + pathinfo()
  + rmdir()
- 常量
  + define(name,value,ignore) 定义后不能修改
- 表单
 + form input:submit image button
 + $_GET 用于接收URL地址中的提交数据
 + $_POST 用于接收请求体提交的数据
 + 一般提交给自己，把表单提交的数据处理放在html之前 
 + $_SERVER['REQUEST_METHOD']==='POST' 判断请求方法
 + get 提交 通过url传递
 + 常见表单处理
   * 单选框 要设置value值
   * 复选框 ，如果选中则提交，未选中则不提交 要设置value 可设置name不同的值，则可提交多个选项或者name的值中以[]结尾
   * 下拉选择框  如果选中 则提交 option中的值 ，有value则提交value
##2018.07.19
 + 处理表单三部曲
   * 接收并校验
    > 校验参数的完整性（用户名为空或者为空字符串）
   * 持久化
    > file_put_contents(file,data,flag) flag决定是否追加数据
   * 响应
##2018.07.20
  + PHP return 
   * >可用于输出文件 然后用 require 接收返回值
  + PHP 文件上传
    * enctype="multipart/form-data" 默认值为urlencoded
    * $_FILES 获取文件
    * 移动文件 move_upload_file(old ,new) 返回是否移动成功
    * 上传文件大小限制 php.ini upload_max_filesize =?
    * post 上传大小限制 8M post_max_size =?
 ##2018.07.24
- 浏览器请求获取过程
  1.用户在浏览器中输入URL地址
  2.浏览器解析用户输入的URL地址 => 域名 + 端口
  3.浏览器检查浏览器本地缓存有没有这个域名
  4.浏览器发起一个DNS系统调用
    * 检查操作系统缓存有没有这个域名
    * 检查系统的hosts中有没有这个域名
    * 发起一个DNS系统调用
  5.浏览器使用本地随机端口会建立一个与服务端的连接
  6.浏览器将客户端的信息打上一个包
  7.将这个包通过连接的通道发送到服务端
  8.服务端打开这个包，拿到请求路径
  9.web服务器软件根据请求的路径对应文件的扩展名找到文件
  10.判断文件类型是否为静态文件
  11.如果是静态文件直接读取这个文件的内容
  12.如果不是静态文件交给外包公司
  13.外包公司处理好后交给服务器软件
  14.服务端把要发给客服端的数据打上一个包，发送个客服端
  15.客户端打开服务端返回过来的包
  16.content_type 决定如何处理响应的内容
  17.如果是html则渲染到界面上、
- HTTP协议 
  * 超文本传输协议
  * 请求报文(请求行 请求头 空行 请求体)
  * 响应报文（状态行 响应头空行响应体）
- php 中设置响应头
  * Content-type:text/html 设置内容的内容
  * charset=utf-8
  * Location:路径  页面跳转 302临时跳转 不要循环重定向
  * Content-Type:application/octet-stream
  * Content-Disposition:attachment;filename=demo.text
- JSON
  * 字面量 表示数据的手段
  * JSON 属性名称必须是双引号包裹
  * JSON 字符串必须双引号
  * JSON 不允许使用注释
  * JSON 没有 undefined
  * file-get-contents(文件)
  * json_decode
  * object of type stdClass  用 ->
- 文件上传
  * input file文件域 accept 设置问价类型
  * in_array 判断是否在数组中
  * 数组追加 $arr[] array_push
  * 保存数据的路径用绝对路径
- 文件删除
  * exit 
- MySQL数据库
  * 数据MySQL
- 数据库命令行操作
  * show databases 显示数据库
  * create database <db-name>创建一个指定的数据库
  * use <da-name> 使用一个数据库，相当于进入一个数据库
  * show tables 显示当前数据库有哪些表
  * create table <table-name> (id int , name var )创建一个数据表并添加字段
  * desc <table-name> 查看指定表结构
  * source ./path/to /sql/sql-file.sql --执行本地SQL的sql语句
  * drop table <table-name> 删除一个指定名称的数据表
  * drop database <db-name> 删除一个指定名称的数据库
  * exit|quit 退出数据库终端
- 数据库字段类型
  * int
  * char
  * varchar
  * date
  * decimal
- SQL 结构化查询语言
  * 查询语句
    * select `id`,`title`,`name` from `table-name`;
    * select * from `table-name`;
    * select 1 from  `table-name`
    * select id,'foo' from `table-name`
  * 新增加
    * insert into users values|value (null,'ceo','麻子',18,0)
    * insert into users(title,name,age,gender) value ('ceo','麻子',18,0)
  * 删除 
    * delete from users 
    * delete from users where title = 'uf0' and|or id=|>|<1
    * delete from users  where id in (1,2,3,4)  
  * 更新
    * update users set  title ='ceo'
    * update users set  title='1111' where  title='ufo'
  * 筛选
  * 查询函数
    * select count(id) from users
    * select count(1) as count from users
    * select max(id) as max from users
    * avg min 
    * select * from users limit 2
    * select * from users limit 2,2
    * select fn(field1 )from table
- php 操作mysql 数据库
  * mysqli_connect()
  * php 配置文件 display_errors= on or off 
  * 函数头前@会忽略错误
  * mysqli_query(查询语句)
  * mysqli_fetch_assoc
  * mysqli_free
  * mysqli_free_result
  * mysqli_close
  * mysqli_affected_rows(连接对象)
- php 数据库查询中文
  * mysql_set_charset($connection,'utf-8')
  * mysql_query('    utf-8')
- php操作无状态
  *  cookie
  * header('Set-Cookie:foo=bar;foo2=bar2')
  * cookie(name,value,expire,path,domain) 只传一个参数是删除
  * $_COOKIE 
  
