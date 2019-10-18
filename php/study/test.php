<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/7/3
 * Time: 0:50
 */
$arr = [["a"=>"b","b"=>"c"]];
function fn($arr,$ele){
    return $arr[]=[$ele["a"]=>$ele];
}
$b = array_reduce($arr,'fn',[]);
echo json_encode($b);
