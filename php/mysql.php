<?php
 // 连接认证
  $link = mysql_connect('localhost:3306','root','root');
  $sql = 'set names utf8';
  $res = mysql_query($sql);
  // 结果集 
  // 1. 布尔值，操作是否正常
  //var_dump($res);
  $sql = "show databases";
  $res = mysql_query($sql);
  //var_dump(mysql_fetch_array($res,MYSQL_ASSOC|MYSQL_NUM));
  header('Content-Type:text/html;charset=utf8');
//   var_dump(mysql_fetch_assoc($res));
//   var_dump(mysql_fetch_row($res));
//   var_dump(mysql_fetch_row($res));
//   var_dump(mysql_fetch_row($res));
//   //重置指针
//   var_dump(mysql_data_seek($res,0));
//   var_dump(mysql_fetch_row($res));
//   var_dump(mysql_fetch_row($res));
$databases = array();
while($row = mysql_fetch_assoc($res)){
    $databases[] = $row;
}
echo $databases;
mysql_close($link);
