import 'dart:convert';

var jsonString = '''
  [
    {"score": [{"score":111}]},
    {"score": 80}
  ]
''';

main(){
  var score= jsonDecode(jsonString);
  print(score[0]['score']);
}