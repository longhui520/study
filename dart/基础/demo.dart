import 'dart:convert';
void main(){
  print('hello world');
  var str = '''
    [
      {"age":10},
      {"name":"小明"}
    ]
  ''';
  var store = jsonDecode(str);
  assert(store is List);
}
