
$(document).ready(function () {
	setLocalTime();
	setInterval("setLocalTime()", 1000);

	$("#botonListaPaises").click(function (e) {
		e.preventDefault();
		$("#ListaPaises").toggle("fast");
	});



	$(".input").click(setCityTime)
});

function setLocalTime() {
	var fecha = new Date();

	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();
	var amPm="";

	var dia = fecha.getDay();
	var numeroFecha = fecha.getDate();
	var mes = fecha.getMonth();

     

    if (hora<12) {
    	amPm= "AM"
    }else {
    	amPm= "PM"
    }

    if (hora<10) {
    	hora="0"+hora;
    }
    if (min<10) {
    	min="0"+min;
    }
    if (seg<10) {
    	seg="0"+seg;
    }

    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octumbre", "Noviembre", "Diciembre"];

    //Meses
    dia = semana[dia];
    mes = meses[mes];
    var horaFinal= hora + ":" + min + ":" + seg + " " + amPm;

    $("#horaSistema").html(horaFinal);
    $("#fechaSistema").html(dia+", "+numeroFecha+" de "+mes);
}

function setCityTime() {
	var fecha = new Date();

	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();
	var amPm="";

	if (hora<12) {
    	amPm= "AM"
    }else {
    	amPm= "PM"
    }

    if (hora<10) {
    	hora="0"+hora;
    }
    if (min<10) {
    	min="0"+min;
    }
    if (seg<10) {
    	seg="0"+seg;
    }w
    var check= $(this).prop("checked");
    var offset= $(this).attr("data-offset");
    var id= $(this).attr("data-name");
    var horaCiudad=hora+parseInt(offset);
    var horaFinal= horaCiudad + ":" + min + ":" + seg + " " + amPm;
    
    if (check) {
    	$("#contenedor").append("<div id='"+id+"'>"+horaFinal+"</div>")
    }else{
    	$("#"+id).remove()
    }
}





