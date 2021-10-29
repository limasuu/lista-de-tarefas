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
				data= new Date(ano, mes, dia).toLocaleString([], {dateStyle: "long"});			
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
	
	var linha= tarefa.nome;
	if(tarefa.importante == true)
		linha+= " (importante!)";
	if(linha.length > 40){
		alert("O nome da tarefa deve ser menor!");		
		return false;	
	}
	
	linha= tarefa.responsavel + " - " + tarefa.data;
	if(linha.length > 40){
		alert("O nome do responsavel deve ser menor!");		
		return false;	
	}
	
	linha= tarefa.local;
	if(linha.length > 40){
		alert("O nome do local deve ser menor!");		
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
	
	celula.onmouseover= function(){
		var div_exibe_tarefa= document.getElementById("exibe_tarefa");
		
		div_exibe_tarefa.style.border= "2px solid var(--destaque)";
		div_exibe_tarefa.style.backgroundColor= "var(--destaque-transparente)";
		
		var para_nome= document.createElement("p");
		para_nome.id= "paragrafo-nome";
		if(tarefa.importante == true)
			para_nome.innerHTML= tarefa.nome + " (importante!)";
		else
			para_nome.innerHTML= tarefa.nome;
		div_exibe_tarefa.appendChild(para_nome);
		
		var para_responsavel_data= document.createElement("p");
		para_responsavel_data.id= "paragrafo-responsavel-data";
		para_responsavel_data.innerHTML= tarefa.responsavel + " - " + tarefa.data;
		div_exibe_tarefa.appendChild(para_responsavel_data);
				
		var para_local= document.createElement("p");
		para_local.id= "paragrafo-local";	
		para_local.innerHTML= tarefa.local;
		div_exibe_tarefa.appendChild(para_local);		
	};
	
	celula.onmouseout= function(){
		var div_exibe_tarefa= document.getElementById("exibe_tarefa");
		
		div_exibe_tarefa.style.border= "0";
		div_exibe_tarefa.style.backgroundColor= "inherit";
		
		var para_nome= document.getElementById("paragrafo-nome");
		div_exibe_tarefa.removeChild(para_nome);
		
		var para_responsavel_data= document.getElementById("paragrafo-responsavel-data");
		div_exibe_tarefa.removeChild(para_responsavel_data);
		
		var para_local= document.getElementById("paragrafo-local");
		div_exibe_tarefa.removeChild(para_local);
	};
}

function prepararListaTarefas(){

	var div_lista_tarefas= document.getElementById("lista-tarefas");
	
	if(div_lista_tarefas.childElementCount == 0){
	
		var div_entrada_tarefas= document.getElementById("entrada-tarefas");
		div_entrada_tarefas.style.borderRight= "1px solid var(--destaque)";
		
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
	
		div_info_tarefas.style.border= "1px solid var(--contrastante)";
	
		var para_qntd= document.createElement("p");
		para_qntd.id= "paragrafo-qntd";
		
		var para_data_hora= document.createElement("p");
		para_data_hora.id= "paragrafo-data-hora";			
				
		div_info_tarefas.appendChild(para_qntd);
		div_info_tarefas.appendChild(para_data_hora);	
	}	
}
