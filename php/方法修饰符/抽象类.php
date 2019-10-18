<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/16
 * Time: 0:21
 */
header('content-type:text/html;charset=utf-8');
abstract class  Goods {
    protected  $name;
    public function setName($name){
        $this->name = $name;
    }
    abstract  public function getName();

}
class Book extends Goods {
    public  function getName(){
        echo "《{$this->name}》";
    }
}
$jack = new Book();
$jack->setName('xiaoming');
$jack->getName();