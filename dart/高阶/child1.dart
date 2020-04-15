import 'event_bus.dart';

class Child2{
  Child2(){
    var bus = EventBus();
    bus.on('login',(arg){
      print('我是子元素2');
    });
  }
}