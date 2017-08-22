//__________________FORMULARIO_______________________________________


//___________________ VALIDACION DE NOMBRE_______________________________

function verificarNombre(){
     
    var nombre = document.getElementById("nombre").value;
	var salida_nombre= document.getElementById("salida-nombre");
	  var enviar=false;
	if (nombre.length > 0 && nombre.match(/^[a-zA-Z\s]*$/)){
        salida_nombre.innerHTML="<div style= color:black style-size:10px;>Nombre Valido :) </div>";
      enviar=false;
	}else{
		salida_nombre.innerHTML="<div style= color:red;>Nombre Invalido  :( </div>";
	}
	return enviar;
}
