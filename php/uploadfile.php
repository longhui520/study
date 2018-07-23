<?php

    function upload(){
        if(!isset($_FILES['img'])){
            $GLOBALS['message']='别玩我';
            return;
        }
        $file=$_FILES['img'];
        if($file['error']!=UPLOAD_ERR_OK){
            $GLOBALS['message']='上传文件失败';
            return;
        }
        $source=$file['tmp_name'];
        $target=$file['name'];
        $moved=move_uploaded_file($source,$target);
         $GLOBALS['message']='上传成功';
        if(!$moved){
            $GLOBALS['message']='移动失败';
            return;
        }else{
            return $target;
        }

    }
if($_SERVER['REQUEST_METHOD']==='POST'){
//    var_dump($_FILES);
    $ims=upload();
    echo $GLOBALS['message'];
}


?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="img" id="">
    <button>提交</button>
    <img src="<?php echo $ims ?>" alt="">
</form>
</body>
</html>
