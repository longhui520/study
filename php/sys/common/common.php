<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/3/3
 * Time: 22:53
 */

/** 连接数据库
 * @param $host 主机名
 * @param $user 账号
 * @param $password 密码
 * @return resource 返回连接对象
 */
header('Content-type:text/html;charset=utf8');
function mysql_link($host,$user,$password){
    $link = mysql_connect($host,$user,$password);
    if(!$link){
        echo '连接数据库失败'.'<br/>';
        echo '错误代码是'.mysql_errno().'<br />';
        echo '错误信息是'.iconv('GBK','UTF-8',mysql_error()).'<br />';
        exit;
    }else{
        return $link;
    }
}

/**
 * 执行sql语句
 * @param $sql 要执行的sql语句
 * @return resource 执行sql的结果集
 */
function mysql_sql($sql){
    $res = mysql_query($sql);
    if(!$res){
        echo '连接数据库失败'.'<br/>';
        echo '错误代码是'.mysql_errno().'<br />';
        echo '错误信息是'.iconv('GBK','UTF-8',mysql_error()).'<br />';
        exit;
    }else{
        return $res;
    }
}
/**
 * 重定向
 * @param $url 重定向的地址
 * @param $msg 重定向是的提示信息
 * @param $time=3 重定向的时间
 */
function redirect($url,$msg,$time=3){
    header("Refresh:{$time};url={$url}");
    echo $msg;
    exit;
}