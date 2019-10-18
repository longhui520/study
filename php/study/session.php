<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/3/18
 * Time: 22:49
 */
header('Content-type:text/html;charset=utf8;');
session_start();

if(isset($_SESSION['view'])){
    $_SESSION['view']+=1;
}else{
    $_SESSION['view'] =1;
}
echo '浏览量'.$_SESSION['view'];


