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
$dbhost = 'localhost:3306';
$dbuser='root';
$dbpass='root';
// $conn=mysqli_connect($dbhost,$dbuser,$dbpass);
// if(!$conn){
//     die('连接失败：'.mysqli_error($conn));
// }else{
//     echo '连接成功';
// }
// mysqli_query($conn,"set names utf8");
// $sql='select * from tt_user';
// mysqli_select_db($conn,'think');
// $retval=mysqli_query($conn,$sql);
// echo '<pre>';
// print_r(mysqli_fetch_array($retval,MYSQL_NUM));
// echo '</pre>';

// mysql_free_result($retval);
// mysql_close($conn);
$conn = new mysqli($dbhost,$dbuser,$dbpass);
if($conn->connect_error){
    die('链接失败'.$conn->connect_error);
}
$conn->select_db('think');
// $conn->query('delete from tt_user where id<13');
// $stmt = $conn->prepare("INSERT INTO tt_user (name, old) VALUES (?, ?)");
// $stmt->bind_param("si", $name, $old);
// $name="小蓝";
// $old=16;
// $stmt->execute();
// $stmt->close();
// $sql="select * from tt_user";
// $result=$conn->query($sql);
// if($result->num_rows>0){
//     while($row=$result->fetch_assoc()){
//         echo "id:".$row['Id']."name:".$row['name']."old:".$row['old']."create_time:".$row['create_time']."<br/>";
//     }
// }
// $sql_create_table="create table tt_demo (id int(6) unsigned auto_increment primary key,
//     firstname varchar(30) not null,
//     lastname varchar(30) not null,
//     email varchar(50),
//     reg_date timestamp
//     )";
// $sql_add="insert into tt_demo (firstname,lastname) values ('成','龙')";
// $conn->query($sql_add);

// $conn->close();
    preg_match('/(foo)(bar)(baz/','foobarbbaz',$match,PREG_OFFSET_CAPTURE);
    echo '<pre>';
    print_r($match);
    echo '</pre>';
?> 
</body>
</html>
