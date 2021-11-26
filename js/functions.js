function validarFormulario() {
    var resultado = true;
    inputs = document.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {    
        if (((inputs[i].type == "text")) && (inputs[i].value == "")) {
            alert(inputs[i].name.toUpperCase() + " não pode estar em branco. Favor preencher!");
            resultado = false;
            break;
        }

    }
    return resultado;
}


function cadastrar() {

	if (validarFormulario()){

	let dadosUser = new Array()
	
	if (localStorage.hasOwnProperty("dadosUser")) {
       dadosUser = JSON.parse(localStorage.getItem("dadosUser"))
   }
	
	
    nome = document.getElementById("txtNome").value;
    matricula = document.getElementById("txtMatricula").value;
    nota1 = document.getElementById("txtNota1").value;
    nota2 = document.getElementById("txtNota2").value;

    dadosUser.push({nome:nome, matricula:matricula, nota1:nota1, nota2:nota2})

    localStorage.setItem("dadosUser",JSON.stringify(dadosUser));
    alert("Cadastro realizado com sucesso");
  }
}

function listar(){
		
	var tbAlunos = localStorage.getItem("dadosUser");
    tbAlunos = JSON.parse(tbAlunos); 
     
	var tabela = document.getElementById("tblListar");
	
	tabela.innerHTML = "";
	tabela.innerHTML =  "<thead>"+
        "   <tr>"+      
        "   <th>Nome</th>"+
        "   <th>R.A</th>"+
        "   <th>Nota(1º bim)</th>"+
        "   <th>Nota(2º bim)</th>"+
		"   <th>Total</th>"+
	    "   <th>Situação</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>";	
	
	for(var i in tbAlunos){
        var aluno = tbAlunos[i];	   
	    var soma = parseFloat(aluno.nota1) + parseFloat(aluno.nota2);
		var situacao = (soma >= 60 ? "Aprovado" : "Reprovado"); 
       
		tabela.innerHTML = tabela.innerHTML + "<tr>" +
		                   "<td>" + aluno.nome + "</td>" +
						   "<td>" + aluno.matricula + "</td>" +
						   "<td>" + aluno.nota1 + "</td>" +
						   "<td>" + aluno.nota2 + "</td>" +
						   "<td>" + soma.toString() + "</td>" +
						   "<td>" + situacao + "</td>" +
		                   "</tr>";
		 
		
    } 
 }
 