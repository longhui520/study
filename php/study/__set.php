<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 20:20
 */
class Student {
    private $name;
    function __set($key, $value)
    {
        $this->$key = $value;
    }
    function __get($key)
    {
        return $this->$key;
    }
}
$stu = new Student();
$stu->name = '张三';
echo $stu->name;
var_dump($stu);