// Selecionando os elementos da página pelos IDs
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os elementos da página pelos IDs
    const homeSection = document.getElementById('home-section');
    const detailsSection = document.getElementById('details-section');
    const btnEnter = document.getElementById('btn-enter');
    const btnBack = document.getElementById('btn-back');

    // Função para entrar na tela de detalhes
    if (btnEnter) {
        btnEnter.addEventListener('click', function() {
            homeSection.classList.remove('active');
            homeSection.classList.add('hide');
            
            detailsSection.classList.remove('hide');
            detailsSection.classList.add('active');
        });
    }

    // Função para voltar para a tela inicial
    if (btnBack) {
        btnBack.addEventListener('click', function() {
            detailsSection.classList.remove('active');
            detailsSection.classList.add('hide');
            
            homeSection.classList.remove('hide');
            homeSection.classList.add('active');
        });
    }
});
