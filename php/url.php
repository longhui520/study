<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/5/29
 * Time: 14:38
 */

$str = 'http://www.pp.com/Admin/index.php/MisAutoMobileQjy/index/projectworkid//6094/projectid/649';
function GET2($str,$param){
    $reg='/(?<='.$param.'\/).*/';
    preg_match($reg,$str,$match);
    if(!empty($match[0])){
        $pos = strpos($match[0], '/');
        if($pos === false){
            $pos = strlen($match[0]);
        }
        return substr($match[0],0,$pos);
    }
    return "";
}

$projectworkid = GET2($str,'projectworkid');
$projectid = GET2($str,'projectid');
var_dump($projectworkid);
var_dump($projectid);

