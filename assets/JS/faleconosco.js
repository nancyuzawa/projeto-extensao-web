
document.querySelector('#inp-email').addEventListener('blur', function() {
    validarEmail(this.value);  
    verificarCampo();          
});

document.querySelectorAll('#inp-name, #inp-email, #inp-message').forEach(input => {
    input.addEventListener('input', verificarCampo);  
});


function verificarCampo(){
    const name = document.querySelector('#inp-name').value.trim(); // trim = remove os espaçamentos do começo e do fim dos valores
    const email = document.querySelector('#inp-email').value.trim();
    const message = document.querySelector('#inp-message').value.trim();
    const isEmailValid = validarEmailSilencioso(email);  
    
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


function validarEmailSilencioso(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}