<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/20
 * Time: 0:32
 */
class Student {
    private $is_clone = false;
    function __clone(){
        $this->is_clone = true;
    }
}
$stu1 = new Student;
var_dump($stu1);
$stu2 = clone $stu1;
var_dump($stu2);