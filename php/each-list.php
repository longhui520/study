<?php
$arr=['id'=>30,'brand'=>'ooppo','goodsname'=>'x','price'=>3000];
while(list($k,$v)=each($arr)){
    echo $k,'=>',$v,'<br />';
}