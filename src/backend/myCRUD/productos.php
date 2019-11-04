<?php

//Archivo (productos.php)
function conecta_bd(){		
  $servidor = "127.0.0.1";    //Servidor
  $usuario = "root";          //Usuario
  $clave = "";                //Clave
  $bd = "test";		            //Base de datos
 
	$conn=mysqli_connect($servidor,$usuario,$clave, $bd);
		
	if(mysqli_connect_errno()){
		echo mysqli_connect_error();
		exit(0);
	}
		
	# Seleccion de BD
	return $conn;
}
 
$sql = "SELECT * FROM PRODUCTOS";

$conn	=	conecta_bd();
$rs = mysqli_query($conn, $sql);
$array = array();
if ($rs) {
	$array = array();
	while ($fila = mysqli_fetch_assoc($rs)) {	
		$array[] = array_map('utf8_encode', $fila);
	}
	$res = json_encode($array, JSON_NUMERIC_CHECK);
}else{
	$res = null;
	echo mysqli_error($conn);
}
mysqli_close($conn);
echo $res;

?>