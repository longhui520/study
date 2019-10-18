<?php
	var_dump($_POST);
 if(isset($_FILES['photo'])){
	move_uploaded_file($_FILES['photo']['tmp_name'],$_FILES['photo']['name']);
    var_dump($_FILES['photo']);
	
}