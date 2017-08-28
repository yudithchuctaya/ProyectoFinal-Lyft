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
        salida_nombre.innerHTML="<div style= color:black style-size:10px;>Nombre Valido ✔ </div>";
      enviar=false;
	}else{
		salida_nombre.innerHTML="<div style= color:red;>Error </div>";
	}
	return enviar;
}
//__________________VALIDACIO DE E-MAIL________________________________
	function verificarEmail(){
	  var email = document.getElementById("email");
	  var salida_email= document.getElementById("salida-email");
	  var enviar=false;
	 if(email.value.length > 0 && email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
	    salida_email.innerHTML="<p style='color:black'>Email valido ✔</p>";
	    enviar=false;
	  }
	  else{
	    salida_email.innerHTML="<p style='color:red' > Invalido, Ej: name@domain.com</p>";
	  
	  }
	  return enviar;
	 }
