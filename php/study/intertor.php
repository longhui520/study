<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 21:11
 */
class Student {
    private $name;
    public function __construct($name)
    {
        $this->name = $name;
    }
    public function __get($name)
    {
        return $this->$name;
    }
}
class PHP implements Iterator{
    private $list = array();
    public function add(Student $stu){
        $this->list[]=$stu;
    }

    /**
     * 指针复位
     * @return mixed|void
     */
    public function rewind()
    {
        return reset($this->list);
    }

    /**
     * 指针当前值
     * @return mixed
     */
    public function current()
    {
        return current($this->list);
    }

    /**
     * 指向下一个指针
     * @return mixed|void
     */
    public function next()
    {
       return next($this->list);
    }

    /**
     * 指针的当前key
     * @return int|mixed|null|string
     */
    public function key(){
        return key($this->list);
    }

    /**
     * 验证当前的key是否为空
     * @return bool
     */
    public function valid()
    {
       return key($this->list)!==null;
    }
}
$class = new PHP();
$class->add(new Student('李白'));
$class->add(new Student('白居易'));
$class->add(new Student('杜甫'));
var_dump($class);
foreach ($class as $value){
    echo $value->name;
}
var_dump(strval(0));