var binaryLiteral = 10;
var octalLiteral = 484;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var name2 = '张上';
var words = "" + name2;
var x;
x = ['runboob', 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
function hello() {
}
var str = '1';
var str2 = str; //str 现在是 number 类型
console.log(str2);
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("全局变量为：" + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("类变量" + obj.num_val);
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
