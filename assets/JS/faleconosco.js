function verificarCampo() {
    const name = document.getElementById("inp-name").value;
    const email = document.getElementById("inp-email").value;
    const message = document.getElementById("inp-message").value;
    const botaoEnviar = document.getElementById('btn-send');
    
    // Habilita o botão se houver texto no campo, caso contrário, desabilita
    if (name === "") {
        botaoEnviar.disabled = true;
    } else {
        botaoEnviar.disabled = false;
    }
  }

