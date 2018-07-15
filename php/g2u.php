<?php
function charset($data){
    if(!empty($data)){
        $fileType=mb_detect_encoding($data,array('UTF-8','GBK','GB2312','BIG5'));
        if($fileType!='UTF-8'){
            $data=mb_convert_encoding($data,'utf-8',$fileType);
        }
    }
    return $data;
}