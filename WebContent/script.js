function Tarefa(id, nome, responsavel, data, local, importante){

	this.id= id;
	this.nome= nome;
	this.responsavel= responsavel;
	this.data= data;
	this.local= local;
	this.importante= importante;
}

var tarefas= new Array();

function salvar(){

	var campos= [document.getElementById("campo-tarefa"),
		document.getElementById("campo-responsavel"),
		document.getElementById("campo-dia"),
		document.getElementById("campo-mes"),
		document.getElementById("campo-ano"),
		document.getElementById("campo-local"),
		document.getElementById("campo-importante")	
	];

	var tarefa= criarTarefa(campos);

	if(camposPreenchidos(tarefa)){		
	
		inserirNaTabela(tarefa);
		limparCampos(campos);
		atualizarInformacoes();
	}	
		
}

function criarTarefa(campos){

	var nome= campos[0].value;
	var responsavel= campos[1].value;
		
	var dia= campos[2].value;
	var mes= campos[3].value;
	var ano= campos[4].value;
	
	var data= formatarData(dia, mes, ano);
	
	var local= campos[5].value;
	var importante= campos[6].checked;
		
	var tarefa= new Tarefa(tarefas.length, nome, responsavel, data, local, importante);
	tarefas[tarefas.length]= tarefa;

	return tarefa;
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

function camposPreenchidos(tarefa){

	if(tarefa.nome == "" || tarefa.responsavel == "" || tarefa.data == "" || tarefa.local == ""){
		alert("Todos os campos precisam ser preenchidos corretamente!");		
		return false;		
	}

	return true;
}

function inserirNaTabela(tarefa){

	prepararListaTarefas();
	
	var tabela= document.getElementById("tabela");	
	var linha= tabela.insertRow();
				
	var celula= linha.insertCell();
	celula.innerHTML= tarefa.nome;
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

function atualizarInformacoes(){

	prepararInformacoesTarefas();

	var tabela= document.getElementById("tabela");
	var para_qntd= document.getElementById("paragrafo-qntd");
	var para_data_hora= document.getElementById("paragrafo-data-hora");		
	
	para_qntd.innerHTML= "Numero de tarefas: " + tabela.rows.length;	
	para_data_hora.innerHTML= "Ultima atualizacao: " + new Date().toLocaleString([], {dateStyle: "long", timeStyle: "short"});	
}

function prepararInformacoesTarefas(){

	var div_info_tarefas= document.getElementById("info-tarefas");
	
	if(div_info_tarefas.childElementCount == 0){
	
		var para_qntd= document.createElement("p");
		para_qntd.id= "paragrafo-qntd";
		
		var para_data_hora= document.createElement("p");
		para_data_hora.id= "paragrafo-data-hora";			
				
		div_info_tarefas.appendChild(para_qntd);
		div_info_tarefas.appendChild(para_data_hora);	
	}	
}




