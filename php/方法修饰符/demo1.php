<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/13
 * Time: 23:15
 */
class Person{
    public static $national = '中国';
    public static function show(){
      echo '这是静态方法';
    }
}
Person::show();
echo Person::$national;