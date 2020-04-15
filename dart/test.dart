import 'dart:math';

void main(List<String> args){
  var letterSet = {'a','b','c'};
  print('$letterSet ${letterSet.runtimeType}');
}

class Point{
  final num x;
  final num y;
  num distance;
  Point(this.x,this.y){
    distance = sqrt(x*x + y*y);
  }
}