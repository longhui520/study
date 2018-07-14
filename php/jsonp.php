<?php
header('Content-type:application/json');
$jsoncallback=htmlspecialchars($_REQUEST['jsoncallback']);
$json_data='["customername1","customername2"]';
echo $jsoncallback."(".$json_data.")";