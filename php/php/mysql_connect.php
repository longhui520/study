<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/3/3
 * Time: 9:30
 */
// php 连接mysql的基本操作
//如果要重开一个连接，在第四个参数传入 true；
  $link = mysql_connect('localhost:3306','root','root');
  //var_dump($link);
 /**
  *  连接步骤
  * 1. php建立连接
  * 2.php 发送查询语句
  * 3.mysql 执行语句，返回结果
  * 4.mysql接收数据
  * 5.接收是布尔值，代表sql语句是否正常
  * 6.接收是resource 返回的结果集
  * 7.php 没有直接使用结果集，需要转化
  * 8.断开连接
  * */
    $sql = "set names utf8";
    $res = mysql_query($sql);
    //var_dump($res);
    $sql = "show databases";
    $res = mysql_query($sql);
    var_dump(mysql_fetch_array($res));
  /**
   * mysql_fetch_array
   * 第二个参数 MYSQL_ASSOC,MYSQL_NUM MYSQL_BOTH
   * mysql_fetch_assoc 获取关联数组
   * mysql_fetch_row 获取索引数组
   * mysql_fetch_seek 结果集重置指针
   */
//  var_dump(mysql_fetch_array($res,MYSQLI_ASSOC));
//  var_dump(mysql_fetch_array($res,MYSQLI_NUM));
//  var_dump(mysql_data_seek($res,0));
//  var_dump(mysql_fetch_array($res,MYSQLI_ASSOC));

//while($row = mysql_fetch_array($res)){
//    $databases[] = $row;
//}
//var_dump($databases);
//增删改查
//从计算机的角度 增删改 属于写 查属于读
//写操作
//新增操作:通常引号要获取当前新增记录的自增长id mysql_insert_id 直接获取上次新增操作的自增长的ID，如果没有自增长id 获得0
//删除操作：通常不能直接通过 mysql_query的结果true来进行判断，true不代表执行成功，只代表sql语句没有语法错误，通过受影响的行来的判定是否成功，mysql_affected_rows()来获取上次操作的受影响的行数
//连接认证：不一定连接成功，需要对结果进行判断，可以直接使用三目运算(逻辑或)来进行处理，但是无法获取错误信息，如果要获取错误信息，那么需要用mysql提供的获取函数
//mysql_erno mysql_error