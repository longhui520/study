import 'event_bus.dart';

class Child1{
  Child1(){
    var bus = EventBus();
    bus.on('login',(arg){
      print('我是子元素1');
    });
  }
}