<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 19:45
 */
interface  IStragety {
    function on_the_way();
}
class Bus implements IStragety {
    public function on_the_way()
    {
        echo '我坐车去';

    }
}
class School implements IStragety{
    public function on_the_way()
    {
        echo '走路去';
    }
}
class Stragety {
    public function getWay(IStragety $obj){
        $obj->on_the_way();
    }
}
$obj = new Stragety;
$obj->getWay(new Bus);
$obj->getWay(new School);
new stdClass();