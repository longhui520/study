<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/3/3
 * Time: 10:48
 */
header('Content-type:text/html;charset=utf-8');
$link = @mysql_connect('localhos','root','root');
if(!$link){
    echo '数据库连接失败'.'<br/>';
    echo '错误代码是'.mysql_errno().'<br/>';
    echo '错误信息是'.iconv('GBK','UTF-8',mysql_error()).'<br/>';
    exit;
}