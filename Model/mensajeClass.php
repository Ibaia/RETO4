<?php
class mensajeClass{
    protected $idUsuario;
    protected $nombre;
    protected $tipo;
    protected $mennasaje;

    public function getIdUsuario(){
        return $this->idUsuario;
    }

    public function setIdUsuario($idUsuario){
        $this->idUsuario = $idUsuario;
    }
    public function getNombre(){
        return $this->nombre;
    }

    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
    public function getTipo(){
        return $this->tipo;
    }

    public function setTipo($tipo){
        $this->tipo = $tipo;
    }
    public function getMensaje(){
        return $this->mennasaje;
    }

    public function setMensaje($mennasaje){
        $this->mennasaje = $mennasaje;
    }}