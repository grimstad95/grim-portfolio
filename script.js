// ─── Data ──────────────────────────────────────────────────────────────────

const fotoProjects = [
    { title: 'Lets Move',            category: 'kommersielt', tags: ['Foto', 'Kommersielt'] },
    { title: 'Brattvåg Janitsjar',   category: 'kommersielt', tags: ['Foto', 'Event'] },
    { title: 'Produktfoto',          category: 'kommersielt', tags: ['Foto', 'Produkt'] },
    { title: 'Bryllup & Event',      category: 'bryllup',     tags: ['Foto', 'Bryllup'] },
    { title: 'Bryllup & Event II',   category: 'bryllup',     tags: ['Foto', 'Event'] },
    { title: 'Bryllup & Event III',  category: 'bryllup',     tags: ['Foto', 'Bryllup'] },
];

const videoProjects = [
    // Podcast
    { title: 'Sissener / Nordnet',       category: 'podcast',        tags: ['Klipp', 'Regi'] },
    { title: 'Fantasy PL Podden',        category: 'podcast',        tags: ['Klipp', 'Regi'] },
    { title: 'Kontoret',                 category: 'podcast',        tags: ['Klipp'] },
    // Show
    { title: 'Snack King Show',          category: 'show',           tags: ['Regi', 'Klipp', 'Manus'] },
    { title: 'Hot Seat',                 category: 'show',           tags: ['Regi', 'Klipp'] },
    { title: 'Hjernefrys',              category: 'show',           tags: ['Regi', 'Klipp'] },
    // Sosiale medier
    { title: 'Daniel Grindevald',        category: 'sosiale-medier', tags: ['Klipp', 'Sosiale medier'] },
    { title: 'Oskar Westerlin',          category: 'sosiale-medier', tags: ['Klipp', 'Sosiale medier'] },
    { title: 'Skjessen',                 category: 'sosiale-medier', tags: ['Klipp'] },
    { title: 'Den Stolte Hane',          category: 'sosiale-medier', tags: ['Klipp', 'Sosiale medier'] },
    // Næringsliv
    { title: 'Kongsberg Digital',        category: 'næringsliv',     tags: ['Regi', 'Foto', 'Klipp'] },
    { title: 'Lege greier med Håkon',    category: 'næringsliv',     tags: ['Klipp', 'Regi'] },
    { title: 'Røde Kors',                category: 'næringsliv',     tags: ['Regi', 'Klipp'] },
    { title: 'Defigo',                   category: 'næringsliv',     tags: ['Regi', 'Klipp'] },
    { title: 'BN Norge',                 category: 'næringsliv',     tags: ['Klipp', 'Regi'] },
    { title: 'Strawberry Hotels',        category: 'næringsliv',     tags: ['Regi', 'Foto'] },
    { title: 'ELDI',                     category: 'næringsliv',     tags: ['Regi', 'Klipp'] },
    // YouTube
    { title: 'Helt Kake',                category: 'youtube',        tags: ['Regi', 'Klipp', 'Manus'] },
    { title: 'Oskar Westerlin',          category: 'youtube',        tags: ['Regi', 'Klipp'] },
    { title: 'Snack King',               category: 'youtube',        tags: ['Regi', 'Klipp'] },
    { title: 'We Be Cheffin',            category: 'youtube',        tags: ['Klipp', 'Regi'] },
    // Reklame
    { title: 'Skogstad',                 category: 'reklame',        tags: ['Regi', 'Foto'] },
    { title: 'Sætre',                    category: 'reklame',        tags: ['Regi', 'Klipp'] },
    { title: 'Rema 1000',                category: 'reklame',        tags: ['Regi', 'Klipp'] },
    { title: 'Den Stolte Hane',          category: 'reklame',        tags: ['Regi', 'Foto'] },
    { title: 'New Wave',                 category: 'reklame',        tags: ['Foto', 'Regi'] },
    { title: 'Kari Traa',                category: 'reklame',        tags: ['Foto', 'Regi'] },
    { title: 'Norgesplaster',            category: 'reklame',        tags: ['Klipp', 'Regi'] },
    // AI
    { title: 'Valencia CF',              category: 'ai',             tags: ['Idé', 'Klipp', 'AI'] },
    { title: 'Ligue 1',                  category: 'ai',             tags: ['Idé', 'Klipp', 'AI'] },
    // Bryllup
    { title: 'Bryllupsvideo',            category: 'bryllup',        tags: ['Regi', 'Klipp', 'Foto'] },
    { title: 'Bryllupsvideo II',         category: 'bryllup',        tags: ['Regi', 'Klipp'] },
];

// ─── Render ────────────────────────────────────────────────────────────────

function createCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = project.category;

    card.innerHTML = `
        <div class="card-thumb"></div>
        <div class="card-info">
            <div class="card-title">${project.title}</div>
            <div class="card-tags">
                ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function renderGrid(gridId, projects) {
    const grid = document.getElementById(gridId);
    projects.forEach(p => grid.appendChild(createCard(p)));
}

// ─── Filter ────────────────────────────────────────────────────────────────

function setupFilters(filtersId, gridId) {
    const container = document.getElementById(filtersId);
    const grid      = document.getElementById(gridId);

    container.addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        grid.querySelectorAll('.card').forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !match);
        });
    });
}

// ─── Nav scroll shadow ─────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Init ──────────────────────────────────────────────────────────────────

renderGrid('foto-grid', fotoProjects);
renderGrid('video-grid', videoProjects);
setupFilters('foto-filters', 'foto-grid');
setupFilters('video-filters', 'video-grid');
