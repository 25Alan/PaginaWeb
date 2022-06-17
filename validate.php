<?php
$user=$_POST['user'];
$password=$_POST['password'];
session_start();
$_SESSION['user']=$user;

include('db.php');

$consulta="SELECT*FROM user where user='$user' and password='$password'";
$result=mysqli_query($conexion, $consulta);


$filas=mysqli_num_rows($result);

if($filas){
    header("location:index.php");
}else{
    ?>
    <?php
    include("index.php");
    ?>
    <h1>ERROR</h1>
    <?php
}

mysqli_free_result($result);
mysqli_close($conexion);
?>