<?php
$arr=['id'=>30,'brand'=>'ooppo','goodsname'=>'x','price'=>3000];
$arr=[1,2,3,4];
var_dump($arr);
while(list($k,$v)=each($arr)){
    echo $k,'=>',$v,'<br />';


}