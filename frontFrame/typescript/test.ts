let binaryLiteral:number = 0b1010;
let octalLiteral:number = 0o744;
let decLiteral:number = 6;
let hexLiteral:number = 0xf00d;
let name2:string = '张上';
let words:string = `${name2}`;
let x:[string,number];
x = ['runboob',1];
enum Color {Red,Green,Blue};
let c:Color = Color.Blue;
console.log(c);
function hello(): void{
    
}
var str = '1' 
var str2:number = <number> <any> str   //str 现在是 number 类型
console.log(str2)
var global_num = 12;
class Numbers {
    num_val = 13;
    static sval = 10;
    storeNum():void{
        var local_num = 14;
    }
}
console.log("全局变量为："+global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("类变量"+obj.num_val);
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz");