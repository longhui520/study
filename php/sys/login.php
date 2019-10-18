<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/3/3
 * Time: 16:38
 */
include_once './common/common.php';
if(isset($_POST['submit'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    if(empty($username) || empty($password)){
        //header('Location:login.php');
        header('Refresh:3;url=login.php');
        echo '用户名和密码不能为空';
        exit;
    }else{
        include_once "./sql.php";
        $link = mysql_link('localhost:3306','root','root');
        mysql_sql("set names utf8");
        mysql_sql("use sys");
        //' or 1#'
        $username = addslashes($username);
        $password = md5($password);
        $sql = "select * from sys_admin where username='{$username}' and password='{$password}'";
        $res = mysql_sql($sql);
        $user = mysql_fetch_assoc($res);
        if($user){
           redirect('index.php','',0);
        }else{
           echo '登陆失败';
        }
        exit;
    }
}else{
    include_once 'template/login.html';
}
