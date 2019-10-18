<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/1/27
 * Time: 23:46
 */
function sum($a,$b){
    return $a+$b;
}
$arr = [1,2,3,4];
echo array_reduce($arr,'sum');
$arr2 = ["2"=>4];
var_dump($arr2['2']);
var_dump($arr2);