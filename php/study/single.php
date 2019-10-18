<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/20
 * Time: 0:19
 */
class DB1 {

}
class DB2 {

}
class DB3 {

}
function getInstance($db_name){
    static $array = array();
    if(!isset($array[$db_name])){
        $array[$db_name] = new $db_name;
    }
    return $array[$db_name];
}
$db1 = getInstance('DB1');
$db2 = getInstance('DB2');
$db3 = getInstance('DB3');
$db4 = clone $db1;
var_dump($db1);
var_dump($db2);
var_dump($db3);
var_dump($db4);
