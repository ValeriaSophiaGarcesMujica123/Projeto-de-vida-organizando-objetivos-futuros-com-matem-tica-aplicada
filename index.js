// Script para funcionalidades adicionais (se necessário)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site de Recuperação de Áreas Degradadas carregado!');
    
    // Função para adicionar imagens dinamicamente (opcional)
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
});
