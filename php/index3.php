<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/4/12
 * Time: 13:37
 */
$str = "<span>2222222</span>"
preg_match_all("/>(.*?)</is",$str,$arr);