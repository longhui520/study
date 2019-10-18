<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文件上传</title>
</head>
<body>
<?php
    if(isset($_POST['submit'])){
        move_uploaded_file($_FILES['img']['tmp_name'],$_FILES['img']['name']);
        echo '<pre>';
        var_dump($_FILES);
        echo '</pre>';
    }
?>
<form action="file.php" enctype="multipart/form-data" method="post">
    <input type="file"  name="img"  multiple />
    <input type="submit" name="submit" value="提交" />
</form>
</body>
</html>