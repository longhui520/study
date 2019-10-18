<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/18
 * Time: 22:50
 */
header("content-type:text/html;charset=utf-8;");

class Student {
    const scholl = '神奇一中';
    function show(){
        echo self::scholl.'<br>';
        echo Student::scholl.'<br>';
    }
}
$a = new Student;
$a->show();
interface IPic {
    const type = "人类";
}
echo '<hr>';
echo IPic::type;