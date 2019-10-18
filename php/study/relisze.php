<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 22:15
 */
header('Content-type:text/html;charset=utf-8;');
$arr = array(1,2,3,4);
file_put_contents('a.txt',serialize($arr));
$str = file_get_contents('a.txt');
var_dump(unserialize($str));