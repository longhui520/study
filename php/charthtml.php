<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/22
 * Time: 11:01
 */
header('Content-type:text/html;charset=utf-8;');
$b = '【z1550470945】==&#39;1&#39; &#60;&gt;|| 【z1550470945】==&#39;2&#39;';
function html_decode($string){
    $arr = array(
        '/&#32;/' =>" ",
        '/&#33;/' =>"!",
        '/&#34;|&quot;/' =>"\"",
        '/&#35;/' =>"#",
        '/&#36;/' =>"$",
        '/&#37;/' =>"%",
        '/&#38;|&amp;/' =>"&",
        '/&#39;|&apos;/' =>"'",
        '/&#40;/' =>"(",
        '/&#41;/' =>")",
        '/&#42;/' =>"*",
        '/&#43;/' =>"+",
        '/&#44;/' =>",",
        '/&#45;/' =>"-",
        '/&#46;/' =>".",
        '/&#47;/' =>"/",
        '/&#58;/' =>":",
        '/&#59;/' =>";",
        '/&#60;|&lt;/' =>"<",
        '/&#61;/' =>"=",
        '/&#62;|&gt;/' =>">",
        '/&#63;/' =>"?",

    );
    $patterns = array_keys($arr);
    $replacements =array_values($arr);
    return preg_replace($patterns, $replacements, $string);
}
echo html_decode($b);
