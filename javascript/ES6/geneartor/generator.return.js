function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.return('foo'));
console.log(g.next());