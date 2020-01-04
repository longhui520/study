# less
## 参考资料
- [学习less看这篇就够了](https://segmentfault.com/a/1190000012360995)
## 基础
- 变量
    - 值变量
    ```less
    @color:#999;
    @bgColor:skyblue;
    @width:50%;
    #wrap{
        color:@color;
        width:@width;
    }
    ```
    - 选择器变量
    ```less
    @mySelector:#wrap;
    @wrap:wrap;
    @{mySelector}{// 使用时必须用大括号包裹
        color:#999;
        width:50%;
    }
    @{wrap}{
        color:#ccc;
    }
    #@{wrap}{
        color:#666;
    }
    ```
    - 属性变量
    ```less
    @borderStyle:border-style;
    @Solid:solid;
    #wrap{//变量名，必须要用大括号包裹
        @{borderstyle}:@Solid;
    }
    ```
    - url 变量
    ```less
    @image:'../img'
    body{
        background:url("@{image}/dog.png")
    }
    ```
    - 声明变量
    ```less
    @background:{background:red;};
    #main{
        @background();
    }
    ```
## 变量运算
- 加减法时，以第一个数据的单位为基准
- 乘除法时 注意单位-定要统一
```less
    @width:300px;
    @color:#200;
    #wrap{
        width:@width-20;
        height:@width - 20*5;
        margin:(@width -20 )*5;
        color:@color*2;
        background-color:@color + #111;

    }
```
## 变量作用域
- 就近原则
## 用变量去定义变量
```less
@fond:"I am fnord";
@var:"fnord";
#wrap:after{
    content:@@var;
}
```
## 嵌套
 - & 代表上一层选择器的名字,不包含&的嵌套是指子代
 ```less
#header{
    &::after{
        content:"Less is more";
    }
    .title{
        font-weight:bold;
    }
    &_content{
        margin:20px;
    }
}
 ```
 ## 媒体查询
```less
    #main{
        @media screen{
            @media (max-width:768px){
                width:100px;
            }
        }
        @media tv{
            width:2000px;
        }
    }
    //生成的css
    @media screen and (max-width:768px){
        #main{
            width:100px;
        }
    }
    @media tv{
        #main{
            width:2000px;
        }
    }

```
