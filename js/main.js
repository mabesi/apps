// SVG Icons
const icons = {
    github: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    web: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>',
    playstore: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#34A853" d="M3.609 1.814L13.792 12 3.609 22.186a1.966 1.966 0 01-.071-1.493V3.307c-.007-.522.154-1.032.428-1.493z"/><path fill="#FBBC04" d="M3.609 22.186L13.792 12l4.393 4.393-13.637 7.88a1.966 1.966 0 01-.939-.087z"/><path fill="#EA4335" d="M18.185 16.393l3.91-2.256c.538-.311.905-.885.905-1.537 0-.652-.367-1.226-.905-1.537l-3.91-2.256L13.792 12l4.393 4.393z"/><path fill="#4285F4" d="M3.609 1.814l13.637 7.88-4.454 2.306L3.609 1.814z"/></svg>',
    appstore: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
    npm: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#CB3837" d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    email: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    home: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>'
};

// Translations for the portfolio page
const translations = {
    pt: {
        tagline: "Soluções open-source e portfolio de projetos",
        heroTitle: "Mabesi Apps",
        heroText: "Desenvolvendo sistemas e aplicativos open-source para colaboração com a comunidade. Aqui você também encontra trabalhos realizados para clientes como parte do nosso portfolio profissional.",
        aboutMission: "Nossa Missão",
        aboutMissionText: "Desenvolver sistemas e aplicativos open-source que contribuam para a comunidade de desenvolvedores.",
        aboutOpenSource: "Open Source",
        aboutOpenSourceText: "Código aberto e disponível no GitHub, pronto para uso, estudo e contribuições.",
        aboutPortfolio: "Portfolio",
        aboutPortfolioText: "Exposição de trabalhos realizados para clientes, demonstrando experiência e qualidade.",
        aboutCollaboration: "Colaboração",
        aboutCollaborationText: "Projetos abertos para contribuições, feedbacks e parcerias com a comunidade.",
        projectsTitle: "Galeria de Projetos",
        filterAll: "Todos",
        filterFinance: "Finanças",
        filterUtilities: "Utilidades",
        filterProductivity: "Produtividade",
        filterEducation: "Educação",
        filterTools: "Ferramentas",
        filterHealth: "Saúde",
        filterGames: "Jogos",
        filterBlockchain: "Blockchain",
        filterLibrary: "Biblioteca",
        footerDonate: "Apoiar Projetos",
        footerGithub: "GitHub",
        footerContact: "Contato",
        footerMade: "Feito com",
        footerBy: "por",
        footerLicense: "Licenciado sob",
        linkGithub: "Código no GitHub",
        linkNpm: "Pacote no NPM",
        linkWebsite: "Visitar Site",
        linkPlayStore: "Baixar na Play Store",
        linkAppStore: "Baixar na App Store"
    },
    en: {
        tagline: "Open-source solutions and project portfolio",
        heroTitle: "Mabesi Apps",
        heroText: "Developing open-source systems and applications for community collaboration. Here you will also find work done for clients as part of our professional portfolio.",
        aboutMission: "Our Mission",
        aboutMissionText: "Develop open-source systems and applications that contribute to the developer community.",
        aboutOpenSource: "Open Source",
        aboutOpenSourceText: "Open code available on GitHub, ready for use, study, and contributions.",
        aboutPortfolio: "Portfolio",
        aboutPortfolioText: "Showcase of work done for clients, demonstrating experience and quality.",
        aboutCollaboration: "Collaboration",
        aboutCollaborationText: "Projects open for contributions, feedback, and partnerships with the community.",
        projectsTitle: "Project Gallery",
        filterAll: "All",
        filterFinance: "Finance",
        filterUtilities: "Utilities",
        filterProductivity: "Productivity",
        filterEducation: "Education",
        filterTools: "Tools",
        filterHealth: "Health",
        filterGames: "Games",
        filterBlockchain: "Blockchain",
        filterLibrary: "Library",
        footerDonate: "Support Projects",
        footerGithub: "GitHub",
        footerContact: "Contact",
        footerMade: "Made with",
        footerBy: "by",
        footerLicense: "Licensed under",
        linkGithub: "Code on GitHub",
        linkNpm: "Package on NPM",
        linkWebsite: "Visit Website",
        linkPlayStore: "Download on Play Store",
        linkAppStore: "Download on App Store"
    },
    es: {
        tagline: "Soluciones open-source y portafolio de proyectos",
        heroTitle: "Mabesi Apps",
        heroText: "Desarrollando sistemas y aplicaciones open-source para colaboración con la comunidad. Aquí también encontrará trabajos realizados para clientes como parte de nuestro portafolio profesional.",
        aboutMission: "Nuestra Misión",
        aboutMissionText: "Desarrollar sistemas y aplicaciones open-source que contribuyan a la comunidad de desarrolladores.",
        aboutOpenSource: "Código Abierto",
        aboutOpenSourceText: "Código abierto y disponible en GitHub, listo para uso, estudio y contribuciones.",
        aboutPortfolio: "Portafolio",
        aboutPortfolioText: "Exposición de trabajos realizados para clientes, demostrando experiencia y calidad.",
        aboutCollaboration: "Colaboración",
        aboutCollaborationText: "Proyectos abiertos para contribuciones, comentarios y alianzas con la comunidad.",
        projectsTitle: "Galería de Proyectos",
        filterAll: "Todos",
        filterFinance: "Finanzas",
        filterUtilities: "Utilidades",
        filterProductivity: "Productividad",
        filterEducation: "Educación",
        filterTools: "Herramientas",
        filterHealth: "Salud",
        filterGames: "Juegos",
        filterBlockchain: "Blockchain",
        filterLibrary: "Biblioteca",
        footerDonate: "Apoyar Proyectos",
        footerGithub: "GitHub",
        footerContact: "Contacto",
        footerMade: "Hecho con",
        footerBy: "por",
        footerLicense: "Licenciado bajo",
        linkGithub: "Código en GitHub",
        linkNpm: "Paquete en NPM",
        linkWebsite: "Visitar Sitio",
        linkPlayStore: "Descargar en Play Store",
        linkAppStore: "Descargar en App Store"
    }
};

// Current language and filter
let currentLang = 'pt';
let currentFilter = 'all';
let allProjects = [];
let categories = {};
let linkPatterns = {};

// Apply translations to the page
function applyTranslations(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update active flag
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.classList.remove('active');
        if (flag.dataset.lang === lang) {
            flag.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('mabesi-lang', lang);

    // Reload projects with new language
    renderProjects(allProjects);
    setupFilters();
}

// Load projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        linkPatterns = data.linkPatterns;
        categories = data.categories;

        // Separate featured and non-featured projects while maintaining order
        const featured = data.projects.filter(p => p.featured);
        const nonFeatured = data.projects.filter(p => !p.featured);
        allProjects = [...featured, ...nonFeatured];

        renderProjects(allProjects);
        setupFilters();
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Setup category filters
function setupFilters() {
    const filtersContainer = document.getElementById('category-filters');
    if (!filtersContainer) return;

    // Get categories that have at least one project
    const usedCategories = new Set(allProjects.map(p => p.categoryId));

    const allFilterCategories = [
        { id: 'finance', key: 'filterFinance', icon: categories.finance?.icon || '💰' },
        { id: 'utilities', key: 'filterUtilities', icon: categories.utilities?.icon || '🎖️' },
        { id: 'productivity', key: 'filterProductivity', icon: categories.productivity?.icon || '🚀' },
        { id: 'education', key: 'filterEducation', icon: categories.education?.icon || '📚' },
        { id: 'tools', key: 'filterTools', icon: categories.tools?.icon || '🔧' },
        { id: 'health', key: 'filterHealth', icon: categories.health?.icon || '💊' },
        { id: 'games', key: 'filterGames', icon: categories.games?.icon || '🎮' },
        { id: 'blockchain', key: 'filterBlockchain', icon: categories.blockchain?.icon || '🔗' },
        { id: 'library', key: 'filterLibrary', icon: categories.library?.icon || '📦' }
    ];

    // Filter to only include categories with projects
    const filterCategories = [
        { id: 'all', key: 'filterAll', icon: '🎯' },
        ...allFilterCategories.filter(cat => usedCategories.has(cat.id))
    ];

    filtersContainer.innerHTML = '';

    filterCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (cat.id === 'all' ? ' active' : '');
        btn.dataset.category = cat.id;
        btn.innerHTML = `<span>${cat.icon}</span><span data-i18n="${cat.key}">${translations[currentLang][cat.key]}</span>`;
        btn.addEventListener('click', () => filterProjects(cat.id));
        filtersContainer.appendChild(btn);
    });
}

// Filter projects by category
function filterProjects(category) {
    currentFilter = category;

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    // Filter and render
    const filtered = category === 'all'
        ? allProjects
        : allProjects.filter(p => p.categoryId === category);

    renderProjects(filtered);
}

// Render projects to the grid
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    projects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.categoryId;

    const name = project.name;
    const description = project.description[currentLang] || project.description.pt;

    // Get category info from categories object
    const categoryInfo = categories[project.categoryId];
    const categoryName = categoryInfo?.name[currentLang] || categoryInfo?.name.pt || '';
    const categoryIcon = categoryInfo?.icon || '';

    // Build complete URLs from patterns or use complete URLs if provided
    const buildLink = (linkValue, patternKey) => {
        if (!linkValue) return null;
        // If link starts with http, use it as is (complete URL)
        if (linkValue.startsWith('http')) return linkValue;
        // Otherwise, use the pattern
        return linkPatterns[patternKey] + linkValue;
    };

    const links = {
        github: buildLink(project.links.github, 'github'),
        npm: buildLink(project.links.npm, 'npm'),
        website: buildLink(project.links.website, 'website'),
        playstore: buildLink(project.links.playstore, 'playstore'),
        appstore: buildLink(project.links.appstore, 'appstore')
    };

    card.innerHTML = `
        <div class="project-image ${project.categoryId}">
            ${project.image}
            <div class="project-category">
                <span>${categoryIcon}</span>
                <span>${categoryName}</span>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${name}</h3>
            <p class="project-description">${description}</p>
            <div class="project-links">
                ${createIconLink(links.github, 'github', 'linkGithub')}
                ${createIconLink(links.npm, 'npm', 'linkNpm')}
                ${createIconLink(links.website, 'web', 'linkWebsite')}
                ${createIconLink(links.playstore, 'playstore', 'linkPlayStore')}
                ${createIconLink(links.appstore, 'appstore', 'linkAppStore')}
            </div>
        </div>
    `;

    return card;
}

// Create an icon link element
function createIconLink(url, iconType, titleKey) {
    if (!url) return ''; // Don't show link if URL doesn't exist

    const title = translations[currentLang][titleKey];

    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="project-link" title="${title}">${icons[iconType]}</a>`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language or default to Portuguese
    const savedLang = localStorage.getItem('mabesi-lang') || 'pt';
    applyTranslations(savedLang);

    // Setup language switcher
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.addEventListener('click', () => {
            applyTranslations(flag.dataset.lang);
        });
    });

    // Load projects
    loadProjects();
});
