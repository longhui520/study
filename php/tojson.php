<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 10:43
 */
header('Content-type:text/html;charset=utf-8');
$json = require ('app_controlls.php');
function json_encode2($array)
{
    if(version_compare(PHP_VERSION,'5.4.0','<')){
        $str = json_encode($array);
        $str = preg_replace_callback("#\\\u([0-9a-f]{4})#i",function($matchs){
            return iconv('UCS-2BE', 'UTF-8', pack('H4', $matchs[1]));
        },$str);
        return $str;
    }else{
        return json_encode($array, JSON_UNESCAPED_UNICODE);
    }
}
function dump($var, $echo=true, $label=null, $strict=true) {
    echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
    $label = ($label === null) ? '' : rtrim($label) . ' ';
    if (!$strict) {
        if (ini_get('html_errors')) {
            $output = print_r($var, true);
            $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
        } else {
            $output = $label . print_r($var, true);
        }
    } else {
        ob_start();
        var_dump($var);
        $output = ob_get_clean();
        if (!extension_loaded('xdebug')) {
            $output = preg_replace("/\]\=\>\n(\s+)/m", '] => ', $output);
            $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
        }
    }
    if ($echo) {
        echo($output);
        return null;
    }else
        return $output;
}
$arr = array('CompInput','CompInput','CompSelect');
$props= array();
foreach ($arr as $v){
    $vv = $json[$v];
    $vv['test'] = '12';
    unset($vv['unit']);
    $props[]=$vv;

}
dump($props);
file_put_contents('json3.json', json_encode2($props));