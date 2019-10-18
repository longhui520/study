<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/1/27
 * Time: 21:12
 */
/**
 * @param $name
 * @param Closure $cho
 */
function test_closure($name,Closure $cho){
    echo "Hello,{$name}\n";
    $cho();
}
// test_closure("Lily",function(){
//     echo "Redirect to VIP Weclome page.";
// });
//$de_str=file_get_contents('test.json');
//var_dump($de_str);
//$de_json = json_decode($de_str, true);
//var_dump($de_json);
// file_put_contents('test2.json', json_encode($de_json));
// var_dump($de_json);
$arr = array(
    "a"=>array(1,2)
);
$arr2 = $arr;
$arr2['a'][0]= 3 ;
var_dump($arr2);
var_dump($arr);


