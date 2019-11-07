<!--
<?php if($_POST['test'] != 1){ echo 'succes';}?>
<?php if($_POST['test1'] != 1){ echo 'succes1';}?>
-->
<!--
<?php
echo 'Время  ' . ($_POST["test"]);
?>
-->
<?php
$test1 = $_POST["test1"];
$test2 = $_POST["test2"];
$test3 = $_POST["test3"];
$test4 = $_POST["test4"];
$test5 = $_POST["test5"];
?>
<?php

?>
<?php
$servername = "mysql.zzz.com.ua";
$database = "pasha2003";
$username = "pasha2003";
$password = "Pasha2003";
$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
 
//$sql = "INSERT INTO main_test1 (name) VALUES ('sds')";
$sql = "UPDATE main_test1 SET name = '$test1' WHERE id = 2;";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>
