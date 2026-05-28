// Selecionando os elementos da página pelos IDs
const homeSection = document.getElementById('home-section');
const detailsSection = document.getElementById('details-section');
const btnEnter = document.getElementById('btn-enter');
const btnBack = document.getElementById('btn-back');

// Função para entrar na tela de detalhes
btnEnter.addEventListener('click', function() {
    // Esconde a tela inicial
    homeSection.classList.remove('active');
    homeSection.classList.add('hide');
    
    // Mostra a tela de detalhes
    detailsSection.classList.remove('hide');
    detailsSection.classList.add('active');
});

// Função para voltar para a tela inicial
btnBack.addEventListener('click', function() {
    // Esconde a tela de detalhes
    detailsSection.classList.remove('active');
    detailsSection.classList.add('hide');
    
    // Mostra a tela inicial
    homeSection.classList.remove('hide');
    homeSection.classList.add('active');
});
