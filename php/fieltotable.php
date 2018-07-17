<?php
    $contents=file_get_contents('names.txt');
    $lines=explode("\n",$contents);
    foreach($lines as $line){
        if(!$line) continue;
        $cols=explode('|',$line);
        $data[]=$cols;
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>姓名表格</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>邮箱</th>
                <th>网址</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($data as  $line): ?>
                <tr>
                    <?php foreach($line as $col): ?>
                        <?php $col=trim($col); ?>
                        <?php if(strpos($col,'http://')===0): ?>
                            <td><a href="<?php echo strtolower($col); ?>"><?php echo substr($col,7); ?></a></td>
                            <?php else: ?>
                            <td><?php echo $col; ?></td>
                        <?php endif ?>
                    <?php endforeach ?>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
    <?php echo mb_strlen('中国')?>
</body>
</html>
