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
				
				<div id="info-tarefas">
			
					<!-- APAGAR DAQUI PRA BAIXO ------------------------------------------------------------------------------- -->
						
						<p id="paragrafo-qntd">Numero de tarefas: X</p>
						<p id="paragrafo-data-hora">Ultima atualizacao: 00/00/0000 00:00</p>
						
					<!-- APAGAR DAQUI PRA CIMA ------------------------------------------------------------------------------- -->
			
				</div>
			
			</div>		
			<div id="lista-tarefas">
			
				<div id="tabela_tarefas"> <!-- APAGAR DAQUI PRA BAIXO ------------------------------------------------------------------------------- -->
						
						<table id="tabela">
							<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
							<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
							<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
							<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
								<tr>
								<td>ESTA EH UMA LINHA DE TESTE</td>
							</tr>
						</table>
						
				</div> 
				
				<div id="exibe_tarefa"> 
						
						
						<p id="paragrafo-nome">Nome da taaaaaaarefa</p>
						<p id="paragrafo-responsavel">Respoooooonsável pela taarefa</p>
						<p id="paragrafo-data">00/00/0000 00:00</p>
						<p id="paragrafo-local">Loocaaaaaaaal da taaaarefa</p>
						<p id="paragrafo-importante">Importante!</p>
						
						
						
				</div>  <!-- APAGAR DAQUI PRA CIMA ------------------------------------------------------------------------------- -->
				
				
			</div>
				
		</div>
	
	</body>
</html>