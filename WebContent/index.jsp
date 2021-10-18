<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8"/>
		<title>Lista de tarefas</title>
		
		<link rel="stylesheet" type="text/css" href="estilo.css"/>
		<script type="text/javascript" src="script.js"></script>
	</head>
	<body>
	
		<h1>Lista de tarefas</h1>
	
		<div class="principal">
		
			<div class="entrada-tarefas">
			
				<form>
					<label for="campo-tarefa" class="descricao-campo">Tarefa</label>
					<input type="text" id="campo-tarefa" class="campo"/><br/>
					
					<label for="campo-responsavel" class="descricao-campo">Responsável</label>
					<input type="text" id="campo-responsavel" class="campo"/><br/>
				
					<label for="campo-dia" class="descricao-campo">Data</label>
					<input type="text" id="campo-dia" class="campo"/>
					<input type="text" id="campo-mes" class="campo"/>
					<input type="text" id="campo-ano" class="campo"/><br/>
					
					<label for="campo-local" class="descricao-campo">Local</label>
					<input type="text" id="campo-local" class="campo"/><br/>
					
					<label for="campo-importante" class="descricao-campo">Importante</label>
					<input type="checkbox" id="campo-importante" class="campo-radio"/>
				
					<input type="button" value="Salvar" onclick="salvar()"/>
				</form>
			
			</div>		
			<div class="lista-tarefas">
			
			
			</div>
				
		</div>
	
	</body>
</html>