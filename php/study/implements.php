<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/18
 * Time: 22:33
 */
interface  Goods {
    function add();
}
class GoodsA implements  Goods {
    public function add(){
        echo '实现接口';
    }
}
$good = new GoodsA;
$good->add();