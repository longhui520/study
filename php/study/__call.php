<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 20:41
 */
class Student {
    /**
     * @param $name string 调用的方法名
     * @param $arguments array 参数数组
     */
    function __call($name, $arguments)
    {
        echo  "学生类中没有{$name}方法";
    }
}
$stu = new Student();
$stu->show();