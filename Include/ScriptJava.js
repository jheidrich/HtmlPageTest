//                            Florianópolis, 12 de Maio de 2015                            
//				       	Atividade Prática de Web Design - Index.html   
//                              Aluno - Jeferson Heidrich Sagaz                             
//        Superior de Tecnoligia em Análise e Desenvolvimento de Sistemas 1º Semestre Turma N3

function validaFormulario( nome, eMail, mens )
{
	var valNome = ( nome != "" );
	var valMail = ( eMail != "" );
	var valMsgn = ( mens != "" );
	var mensagem = "";
	var erro = false;
	if ( !valNome )
	{
		mensagem += "Campo Nome deve ser Informado !\n";
		erro = true;
	}
	if ( !valMail )
	{
		mensagem += "Campo E-Mail deve ser Informado !\n";
		erro = true;
	}
	else
	{
		if ( ( eMail.indexOf( '@' ) == -1 ) || ( eMail.indexOf( '.' ) == -1 ) )
		{
			mensagem += "Deve ser informado um endereço de e-mail válido no campo E-Mail.";
			erro = true;
		}
	}
	if ( !valMsgn )
	{
		mensagem += "Campo de mensagem deve ser preenchido !\n";
		erro = true;
	}
	if ( erro )
	{	
		alert( mensagem );
		FrmPg4.TxNome.focus();
	}
	else
		alert( "Formulário validado com sucesso !" );
}

function LimpaCampos()
{
	FrmPg4.TxNome.value = "";
	FrmPg4.E_Mail.value = "";
	FrmPg4.Mensagem.value = "";
	FrmPg4.TxNome.focus();
}

function SetarNome()
{
	FrmPg4.TxNome.focus();
}