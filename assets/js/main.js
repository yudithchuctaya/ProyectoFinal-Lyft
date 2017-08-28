//__________________FORMULARIO_______________________________________

/*
        oooooooo                         ooooooooo
        oooooooo                      ooooooooooooooo
        oooooooo                     ooooooooooooooooo
        oooooooo                    ooooooooooooooooooo
        oooooooo ooooooo   ooooooo oooooooo     oooooooooo
        oooooooo ooooooo   ooooooo oooooooo     oooooooooo
        oooooooo ooooooo   ooooooo oooooooooooo oooooooooo
        oooooooo ooooooo   ooooooo oooooooooooo ooooooo
        oooooooo ooooooo   ooooooo oooooooooooo ooooooo
        oooooooo oooooooo oooooooo ooooooooooo  ooooooooo
        oooooooo ooooooooooooooooo oooooooo      ooooooooo
         ooooooo ooooooooooooooooo ooooooo        oooooooo
          ooooooo  ooooooooooooooo ooooo             ooooo
            oooooo       ooooooooo oo                   oo
                   oooooooooooooo
                   ooooooooooooo
                   oooooooooo
                   */


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
//__________________VALIDACIO DE PHONE________________________________
