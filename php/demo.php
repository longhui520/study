<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    header('Content-Type:text/html;charsets:utf-8;');
    function var_dump_format($var){
        echo "<pre>";
        var_dump($var);
        echo "</pre>";
    }
    $queue = array ("凤姐","芙蓉");
    array_unshift($queue,"杨幂","姚晨");
        var_dump_format($queue);
        $fieldName ='name';
        $showFlag = false;
        $readonlyFlag =false;
        $disabledFlag = false;
        $requiredFlag = true;
        $clearableFlag =true;
        $events = "valuechange";
        $placeholder = "请输出";
        $minLen = 0;
        $maxLen = 100;
        $regexRule = "";
        $regeMsg = "";
        $compType = "compInput";
        $data = array(
            $fieldName=>array(
                "base"=>array(
                    "fieldName"=>$fieldName,
                    "showFlag"=>$showFlag,
                    "readonlyFlag"=>$readonlyFlag,
                    "disabledFlag"=>$disabledFlag,
                    "requiredFlag"=>$requiredFlag,
                    "clearableFlag"=>$clearableFlag,
                ),
                "events"=>$events,
                "placeholder"=>$placeholder,
                "minlen" =>$minLen,
                "maxlen"=>$maxLen,
                "regeMsg"=>$regeMsg,
                "regexRule"=>$regexRule,
                "comType"=>$compType,
                )
            );
        $json_string = json_encode($data);
        file_put_contents('test.json', $json_string);
        var_dump_format(file_get_contents('test.json'));
        $string = 'The ##quick## ##brown## ##fox## ##fox## jumped over the lazy dog.';
        $patterns = array('/##quick##/','/##brown##/','/##fox##/');
        $replacements = array('bear','black','slow');
        echo preg_replace($patterns, $replacements, $string);    
    ?>
    
    


</body>
</html>
