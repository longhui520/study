<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 20:04
 */
class Student {
    function __toString()
    {
       return '我是对象的输出';
    }
}
 $stu = new Student;
echo $stu;