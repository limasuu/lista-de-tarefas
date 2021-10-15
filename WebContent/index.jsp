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
					<input type="text" name="campo-tarefa" class="campo"/><br/>
					
					<label for="campo-responsavel" class="descricao-campo">Responsável</label>
					<input type="text" name="campo-responsavel" class="campo"/><br/>
				
					<label for="campo-data" class="descricao-campo">Data</label>
					<input type="text" name="campo-data" class="campo"/><br/>
					
					<label for="campo-local" class="descricao-campo">Local</label>
					<input type="text" name="campo-local" class="campo"/><br/>
					
					<label for="campo-importante" class="descricao-campo">Importante</label>
					<input type="checkbox" name="campo-importante" value="true" class="campo-radio"/>
				
					<input type="button" value="Salvar"/>
				</form>
			
			</div>		
			<div class="lista-tarefas">
			
			
			</div>
				
		</div>
	
	</body>
</html>