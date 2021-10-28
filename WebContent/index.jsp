<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8"/>
		<title>Lista de tarefas</title>
		
		<link rel="stylesheet" type="text/css" href="estilo.css"/>
		<script type="text/javascript" src="script.js"></script>
	</head>
	<body>
	
		<h1 class="titulo-principal">Lista de tarefas</h1>
	
		<div class="principal">
		
			<div id="entrada-tarefas">
			
				<div id="entrada">
					<form>
						<div class="linha-entrada">
							<div class="descricao-campo">
								<label for="campo-tarefa">Tarefa</label>
							</div>
							<input type="text" id="campo-tarefa" class="campo"/>
						</div>
										
						<div class="linha-entrada">		
							<div class="descricao-campo">
								<label for="campo-responsavel">Responsável</label>
							</div>
							<input type="text" id="campo-responsavel" class="campo"/>
						</div>
										
						<div class="linha-entrada">													
							<div class="descricao-campo">
								<label for="campo-local">Local</label>
							</div>
							<input type="text" id="campo-local" class="campo"/>
						</div>
										
						<div class="linha-entrada">													
							<div class="descricao-campo">
								<label for="campo-dia">Data</label>
							</div>
							<div class="campo-data">
								<input type="text" id="campo-dia" class="campo"/>
								<input type="text" id="campo-mes" class="campo"/>
								<input type="text" id="campo-ano" class="campo"/>
							</div>
						</div>
										
						<div class="linha-entrada">													
							<div class="descricao-campo">
								<label for="campo-importante">Importante</label>
							</div>
							<input type="checkbox" id="campo-importante" class="campo-check"/>
						</div>		
													
						<input type="button" class="botao" value="Salvar" onclick="salvar()"/>
					</form>
				</div>
				
				<div id="info-tarefas">				
				</div>
			
			</div>		
			<div id="lista-tarefas">				
			</div>
				
		</div>
	
	</body>
</html>