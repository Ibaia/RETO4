<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'].'/Reto4/model/usuarioModel.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/Reto4/model/usuarioClass.php';

$login = new usuarioModel();
$login->setList();

$usuarios=$login->getList();

$user=filter_input(INPUT_GET, 'usuario');
$userContr=filter_input(INPUT_GET, 'pass');


// //echo $contrasena;

// echo "Insertado: ".$user;
// echo "Insertado: ".$userContr;

$resultado="Usuario o Contrase�a incorrectos";

foreach ($usuarios as $object){

//     echo " Contrase�a ".$object->getContrasena();
//     echo " USuario ". $object->getUsuario();
    //print_r( $object);
    
    if ($object->getUsuario()==$user && $object->getContrasena()==$userContr) {
        
        $_SESSION["username"]= $object->getUsuario();
        $_SESSION["tipoUsu"]=$object->getTipo();  
        
        $resultado=array('username' => $_SESSION["username"], 'tipoUsu' => $_SESSION["tipoUsu"]);   
       
    }
}

echo json_encode($resultado);