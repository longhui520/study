<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登陆</title>
</head>
<body>
<form action="welcome.php" method="post">
    <label>姓名: <input type="text" name="username"></label>
    <label>密码: <input type="password" name="password"></label>
    <input type="submit" value="提交">
</form>
<div id="divCustomers"></div>
<script>
    function callbackFunction(result,methodName){
        var html = '<ul>'
        for(var i=0;i<result.length;i++){
            html+='<li>'+result[i]+'</li>'
        }
        html+='</ul>'
        document.getElementById('divCustomers').innerHTML=html
    }
</script>
<script src="jsonp.php?jsoncallback=callbackFunction"></script>
</body>
</html>