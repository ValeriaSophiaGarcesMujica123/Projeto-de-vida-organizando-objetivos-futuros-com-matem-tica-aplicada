// Selecionando os elementos da página pelos IDs
// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos da tela
    const telaInicial = document.getElementById('telaInicial');
    const conteudoPrincipal = document.getElementById('conteudoPrincipal');
    const btnEntrar = document.getElementById('btnEntrar');
    const btnVoltar = document.getElementById('btnVoltar');

    // Função para mostrar o conteúdo principal e esconder a tela inicial
    function mostrarConteudo() {
        telaInicial.style.display = 'none';
        conteudoPrincipal.classList.remove('hidden');
        // Rola suavemente para o topo do conteúdo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Função para voltar para a tela inicial
    function voltarTelaInicial() {
        conteudoPrincipal.classList.add('hidden');
        telaInicial.style.display = 'flex';
        // Rola suavemente para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Verifica se os elementos existem antes de adicionar eventos
    if (btnEntrar) {
        btnEntrar.addEventListener('click', mostrarConteudo);
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarTelaInicial);
    }

    // Pré-carregar a tela inicial visível
    telaInicial.style.display = 'flex';
    
    // Adiciona um pequeno efeito visual - opcional
    console.log('Site de Recuperação de Áreas Degradadas carregado com sucesso!');
});

// Função utilitária para facilitar a adição de novas imagens (você pode chamar no console se quiser)
window.adicionarImagem = function(url, legenda) {
    const grid = document.getElementById('gridImagens');
    if (grid) {
        const novoItem = document.createElement('div');
        novoItem.className = 'img-placeholder';
        novoItem.innerHTML = `
            <img src="${url}" alt="${legenda}">
            <span class="img-label">${legenda}</span>
        `;
        grid.appendChild(novoItem);
        console.log(`Imagem adicionada: ${legenda}`);
    } else {
        console.error('Grid de imagens não encontrado');
    }
};
