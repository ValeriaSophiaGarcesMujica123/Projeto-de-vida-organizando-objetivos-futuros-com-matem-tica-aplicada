// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Pegando os elementos
    const telaInicial = document.getElementById('telaInicial');
    const conteudoPrincipal = document.getElementById('conteudoPrincipal');
    const btnEntrar = document.getElementById('btnEntrar');
    const btnVoltar = document.getElementById('btnVoltar');

    // Verificando se os elementos existem
    console.log('Tela inicial:', telaInicial);
    console.log('Botão entrar:', btnEntrar);

    // Função para mostrar o conteúdo principal e esconder a tela inicial
    function mostrarConteudo() {
        console.log('Botão entrar clicado!');
        telaInicial.style.display = 'none';
        conteudoPrincipal.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Função para voltar para a tela inicial
    function voltarTelaInicial() {
        console.log('Botão voltar clicado!');
        telaInicial.style.display = 'flex';
        conteudoPrincipal.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Adicionando os eventos
    if (btnEntrar) {
        btnEntrar.addEventListener('click', mostrarConteudo);
        console.log('Evento adicionado ao botão entrar');
    } else {
        console.error('Botão entrar não encontrado!');
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarTelaInicial);
        console.log('Evento adicionado ao botão voltar');
    } else {
        console.error('Botão voltar não encontrado!');
    }

    // Garantindo que a tela inicial está visível no início
    telaInicial.style.display = 'flex';
    conteudoPrincipal.style.display = 'none';
});

// Função utilitária para adicionar imagens dinamicamente
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
        console.log(`✅ Imagem adicionada: ${legenda}`);
        return true;
    } else {
        console.error('❌ Grid de imagens não encontrado');
        return false;
    }
};
