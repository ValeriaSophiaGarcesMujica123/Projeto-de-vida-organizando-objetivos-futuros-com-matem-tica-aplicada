// Mock Database - 6 notícias baseadas no conteúdo do PDF
const newsDatabase = [
    {
        id: 1,
        title: "Degradação do Solo: Impactos na Agricultura Brasileira",
        excerpt: "A redução da fertilidade e a perda da biodiversidade ameaçam a produção de alimentos. Regiões rurais sofrem com estiagem agravada pela degradação ambiental.",
        category: "Sustentabilidade",
        icon: "fa-earth-americas",
        date: "05/06/2026"
    },
    {
        id: 2,
        title: "Reflorestamento: Estratégia Principal para Restaurar Áreas Degradadas",
        excerpt: "O reflorestamento ajuda a proteger o solo contra erosão, restaurar a vegetação nativa e devolver a capacidade produtiva para novas colheitas sustentáveis.",
        category: "Meio Ambiente",
        icon: "fa-tree",
        date: "04/06/2026"
    },
    {
        id: 3,
        title: "Adubação Orgânica e a Recuperação da Fertilidade do Solo",
        excerpt: "Devolver nutrientes ao solo e melhorar sua estrutura são passos essenciais para evitar desertificação e garantir safras abundantes e saudáveis.",
        category: "Agro",
        icon: "fa-seedling",
        date: "03/06/2026"
    },
    {
        id: 4,
        title: "Plantio Direto e Rotação de Culturas na Conservação do Solo",
        excerpt: "Essas práticas reduzem significativamente a erosão, mantêm a fertilidade e são fundamentais para a recuperação de longo prazo do solo agrícola.",
        category: "Tecnologia",
        icon: "fa-tractor",
        date: "02/06/2026"
    },
    {
        id: 5,
        title: "Queimadas e Desmatamento: Os Vilões da Produtividade Agrícola",
        excerpt: "O uso excessivo do solo e as queimadas contribuem para degradação. Iniciativas de recuperação mostram como reverter esses danos ambientais.",
        category: "Urgente",
        icon: "fa-fire-extinguisher",
        date: "01/06/2026"
    },
    {
        id: 6,
        title: "Benefícios da Recuperação para a Segurança Alimentar Global",
        excerpt: "Solos recuperados produzem mais alimentos, armazenam mais água e apresentam menor risco de erosão, fortalecendo a resiliência climática.",
        category: "Sustentabilidade",
        icon: "fa-bowl-food",
        date: "31/05/2026"
    }
];

// Renderizar cartões de notícias dinamicamente
function renderNewsCards() {
    const container = document.getElementById('newsContainer');
    if (!container) return;

    const cardsHTML = newsDatabase.map(news => `
        <article class="news-card">
            <div class="card-image">
                <i class="fas ${news.icon}"></i>
            </div>
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-excerpt">${news.excerpt}</p>
                <a href="#" class="read-more">Ler matéria completa <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');

    container.innerHTML = cardsHTML;
}

// Dark Mode com localStorage
function initDarkMode() {
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (!darkModeBtn) return;
    
    const moonIcon = darkModeBtn.querySelector('.fa-moon');
    const sunIcon = darkModeBtn.querySelector('.fa-sun');
    
    // Verificar preferência salva ou do sistema
    const savedTheme = localStorage.getItem('agrinho-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    }
    
    // Evento de clique
    darkModeBtn.addEventListener('click', () => {
        const hasDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (hasDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('agrinho-theme', 'light');
            if (moonIcon && sunIcon) {
                moonIcon.style.display = 'inline-block';
                sunIcon.style.display = 'none';
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('agrinho-theme', 'dark');
            if (moonIcon && sunIcon) {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline-block';
            }
        }
    });
}

// Menu Hamburguer
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (!menuToggle || !mobileNav) return;
    
    const barsIcon = menuToggle.querySelector('.fa-bars');
    const timesIcon = menuToggle.querySelector('.fa-times');
    
    function openMenu() {
        mobileNav.classList.add('open');
        if (barsIcon && timesIcon) {
            barsIcon.style.display = 'none';
            timesIcon.style.display = 'inline-block';
        }
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileNav.classList.remove('open');
        if (barsIcon && timesIcon) {
            barsIcon.style.display = 'inline-block';
            timesIcon.style.display = 'none';
        }
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileNav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Fechar ao clicar nos links do menu
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Fechar ao clicar fora do menu
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('open') && 
            !mobileNav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Prevenir fechamento ao clicar dentro do menu
    mobileNav.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Smooth scroll para links internos (se houver)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === "#" || href === "" || href === null) return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNewsCards();
    initDarkMode();
    initMobileMenu();
    initSmoothScroll();
});