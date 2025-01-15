/* Adiciona um ouvinte de evento ao campo de e-mail para verificar o e-mail 
   quando o usuário sair do campo (evento blur). */
document.querySelector('#inp-email').addEventListener('blur', function() {
    validarEmail(this.value);  // Valida o email ao sair do campo
    verificarCampo();          // Atualiza o estado do botão
});

document.querySelectorAll('#inp-name, #inp-email, #inp-message').forEach(input => {
    input.addEventListener('input', verificarCampo);  // Verifica os campos conforme o usuário digita
});

// Verifica se todos os campos foram preenchidos corretamente
function verificarCampo(){
    const name = document.querySelector('#inp-name').value.trim(); // trim = remove os espaçamentos do começo e do fim dos valores
    const email = document.querySelector('#inp-email').value.trim();
    const message = document.querySelector('#inp-message').value.trim();
    const isEmailValid = validarEmailSilencioso(email);  // Verifica sem alertar
    
     // Verifica se todos os campos estão preenchidos e se o e-mail é válido
    const allFieldsFilled = name && email && message;
    document.querySelector('#btn-send').disabled = !(allFieldsFilled && isEmailValid);
}

function validarEmail(email){
    let re =  /\S+@\S+\.\S+/;
    if (!re.test(email)){
        alert("Digite um email válido!");
        return false;
    }
    return true;
}

/* Função para validar e-mail sem exibir alertas, usada para ativar/desativar o botão. */
/* usada para verificar a validade do e-mail em segundo plano, controlando o botão sem interromper o usuário */
function validarEmailSilencioso(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}