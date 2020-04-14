<?php 
include('../../Config/Config.php');
$matricula = new matricula($conexion);

$proceso = '';
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$matricula->$proceso( $_GET['matricula'] );
print_r(json_encode($matricula->respuesta));

class matricula{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($matricula){
        $this->datos = json_decode($matricula, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty($this->datos['periodo']['id']) ){
            $this->respuesta['msg'] = 'por favor ingrese el periodo del matricula';
        }
        if( empty($this->datos['alumno']['id']) ){
            $this->respuesta['msg'] = 'por favor ingrese el alumno';
        }
        $this->almacenar_matricula();
    }
    private function almacenar_matricula(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO matriculas (idPeriodo,idAlumno,fecha) VALUES(
                        "'. $this->datos['periodo']['id'] .'",
                        "'. $this->datos['alumno']['id'] .'",
                        "'. $this->datos['fecha'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                    UPDATE matriculas SET
                        idPeriodo     = "'. $this->datos['periodo']['id'] .'",
                        idAlumno      = "'. $this->datos['alumno']['id'] .'",
                        fecha         = "'. $this->datos['fecha'] .'"
                    WHERE idMatricula = "'. $this->datos['idMatricula'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            }
        }
    }
    public function buscarMatricula($valor = ''){
        $this->db->consultas('
            select matriculas.idMatricula, matriculas.codigo, matriculas.nombre
            from matriculas
            where matriculas.codigo like "%'. $valor .'%" or matriculas.nombre like "%'. $valor .'%"

        ');
        return $this->respuesta = $this->db->obtener_data();
    }
    public function traer_periodos_alumnos(){
        $this->db->consultas('
            select periodos.periodo AS label, periodos.idPeriodo AS id
            from periodos
        ');
        $periodos = $this->db->obtener_data();
        $this->db->consultas('
            select alumnos.nombre AS label, alumnos.idAlumno AS id
            from alumnos
        ');
        $alumnos = $this->db->obtener_data();
        return $this->respuesta = ['periodos'=>$periodos, 'alumnos'=>$alumnos ];//array de php en v7+
    }
    public function eliminarMatricula($idMatricula = 0){
        $this->db->consultas('
            DELETE matriculas
            FROM matriculas
            WHERE matriculas.idMatricula="'.$idMatricula.'"
        ');
        return $this->respuesta['msg'] = 'Registro eliminado correctamente';;
    }
}
?>