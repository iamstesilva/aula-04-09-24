// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        // Impede o envio do formulário para mostrar a mensagem
        event.preventDefault();

        // Mostra a mensagem de sucesso
        messageDiv.textContent = 'Formulário enviado com sucesso!';
        messageDiv.classList.add('visible');
        
        // Opcional: Limpa o formulário após a mensagem
        form.reset();
    });
});
