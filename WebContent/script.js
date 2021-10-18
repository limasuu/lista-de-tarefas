
function salvar(){

	var tarefa= document.getElementById("campo-tarefa").value;
	var responsavel= document.getElementById("campo-responsavel").value;
		
	var dia= document.getElementById("campo-dia").value;
	var mes= document.getElementById("campo-mes").value;
	var ano= document.getElementById("campo-ano").value;	
	var data= formataData(dia, mes, ano);
			
	var local= document.getElementById("campo-local").value;
	var importante= document.getElementById("campo-importante").checked;
	
	if(camposPreenchidos(tarefa, responsavel, data, local)){
	
		document.write(tarefa + "<br/>" + responsavel + "<br/>" +
			data + "<br/>" + local + "<br/>" + 
			"importante? " + importante);
	
	}
}

function formataData(dia, mes, ano){

	var data= null;
	var hoje= new Date();

	if(ano >= hoje.getFullYear() && ano < hoje.getFullYear()+10){
		
		if((mes > 0 && mes < 13) &&	(ano > hoje.getFullYear() || (ano == hoje.getFullYear() && mes >= (hoje.getMonth()+1)))){
			var max= 0;
						
			if(mes == 2)
				max= 29;	
								
			else if(mes == 4 || mes == 6 || mes == 9 || mes == 11)
				max= 30;
					
			else
				max= 31;					
											
			if((dia > 0 && dia <= max) && (ano > hoje.getFullYear() || (ano == hoje.getFullYear() && mes > (hoje.getMonth()+1)) || 
					(ano == hoje.getFullYear() && mes == (hoje.getMonth()+1) && dia >= hoje.getDate()) )){
				
				mes--;				
				data= new Date(ano, mes, dia).toLocaleString([], {dateStyle: "short"});			
			}		
		}
	}
	
	return data;
}

function camposPreenchidos(tarefa, responsavel, data, local){

	if(tarefa == "" || responsavel == "" ||
			data == null || local == ""){
		
		alert("Todos os campos precisam ser preenchidos corretamente!");		
		return false;
	}
	return true;
}


