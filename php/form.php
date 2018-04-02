<?php 
require 'connection.php';
$url = $_SERVER['REQUEST_URI'];
$email = $_REQUEST['Email'];

$insert_sql = "INSERT INTO users (email)" .
"VALUES('{$email}');";
mysql_query($insert_sql);
header('Location:'.$_SERVER['HTTP_REFERER']);
?>