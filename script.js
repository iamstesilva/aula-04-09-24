// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const securityForm = document.getElementById('securityForm');
    const messageDiv = document.getElementById('message');

    // Função para abrir a aba selecionada
    function openTab(evt, tabId) {
        const tabContents = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = 'none'; // Oculta todas as abas
        }
        const tabLinks = document.getElementsByClassName('tablink');
        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(' active', ''); // Remove a classe 'active'
        }
        document.getElementById(tabId).style.display = 'block'; // Exibe a aba selecionada
        evt.currentTarget.className += ' active'; // Adiciona a classe 'active' à aba clicada
    }

    // Exibe a primeira aba por padrão
    document.querySelector('.tablink').click();

    // Adiciona o evento de submissão para o formulário de segurança
    securityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        messageDiv.textContent = 'Formulário enviado com sucesso!';
        messageDiv.classList.add('visible');
        securityForm.reset();
    });

    // Adiciona o evento de clique ao botão "Próximo"
    document.querySelector('.nextBtn').addEventListener('click', function(event) {
        openTab(event, 'tab2');
    });
});
