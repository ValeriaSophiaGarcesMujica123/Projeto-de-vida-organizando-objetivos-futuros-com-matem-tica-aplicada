// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const telaInicial = document.getElementById('telaInicial');
    const conteudoPrincipal = document.getElementById('conteudoPrincipal');
    const btnEntrar = document.getElementById('btnEntrar');
    const btnVoltar = document.getElementById('btnVoltar');

    // Função para mostrar conteúdo
    function mostrarConteudo() {
        telaInicial.style.display = 'none';
        conteudoPrincipal.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Função para voltar
    function voltarConteudo() {
        telaInicial.style.display = 'flex';
        conteudoPrincipal.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Adiciona eventos
    if (btnEntrar) {
        btnEntrar.addEventListener('click', mostrarConteudo);
    }

    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarConteudo);
    }
});
