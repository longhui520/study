<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 20:08
 */
class Student {
    function __invoke()
    {
        echo '我被调用了';
    }
}
$stu = new Student();
$stu();
