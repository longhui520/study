import 'event_bus.dart';
import 'child1.dart';
import 'child2.dart';



void main(){
  var bus = EventBus();
  var child1 = Child1();
  var child2 = Child2();

  bus.emit('login');

}