
function salvar(){

	var campos= [document.getElementById("campo-tarefa"),
		document.getElementById("campo-responsavel"),
		document.getElementById("campo-dia"),
		document.getElementById("campo-mes"),
		document.getElementById("campo-ano"),
		document.getElementById("campo-local"),
		document.getElementById("campo-importante")	
	];

	var dados_campos= pegarDados(campos);

	if(camposPreenchidos(dados_campos)){
		inserirNaTabela(dados_campos);
		limparCampos(campos);
	}	
		
}

function pegarDados(campos){

	var dados_campos= new Array();
	
	dados_campos[0]= campos[0].value;
	dados_campos[1]= campos[1].value;
		
	var dia= campos[2].value;
	var mes= campos[3].value;
	var ano= campos[4].value;
	
	dados_campos[2]= formatarData(dia, mes, ano);
	
	dados_campos[3]= campos[5].value;
	dados_campos[4]= campos[6].checked;

	return dados_campos;
}

function formatarData(dia, mes, ano){

	var data= "";
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

function camposPreenchidos(dados_campos){

	for(i=0; i<dados_campos.length-1; i++)
		if(dados_campos[i] == ""){
			alert("Todos os campos precisam ser preenchidos corretamente!");		
			return false;		
		}

	return true;
}

function inserirNaTabela(dados_campos){

	prepararListaTarefas();
	
	var tabela= document.getElementById("tabela");	
	var linha= tabela.insertRow();
		
	for(i=0; i<dados_campos.length; i++){
		var celula= linha.insertCell();
		celula.innerHTML= dados_campos[i];
	}
}

function prepararListaTarefas(){

	var div_lista_tarefas= document.getElementById("lista-tarefas");
	
	if(div_lista_tarefas.childElementCount == 0){
		
		var div_tabela_tarefas= document.createElement("div");
		div_tabela_tarefas.id= "tabela_tarefas";
		
		var div_exibe_tarefa= document.createElement("div");
		div_exibe_tarefa.id= "exibe_tarefa";
				
		div_lista_tarefas.appendChild(div_tabela_tarefas);
		div_lista_tarefas.appendChild(div_exibe_tarefa);
		
		var tabela= document.createElement("table");
		tabela.id= "tabela";
		
		div_tabela_tarefas.appendChild(tabela);
	}
}

function limparCampos(campos){

	for(i=0; i<campos.length-1; i++)
		campos[i].value= "";
		
	campos[campos.length-1].checked= false;
}
