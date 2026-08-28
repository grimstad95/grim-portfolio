(function () {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = `
        <a href="/" class="logo"><img src="logos/GRIM_9J_white.svg" alt="GRIM" class="logo-img"></a>
        <ul class="nav-links">
            <li><a href="video.html" class="${page === 'video.html' ? 'active' : ''}">Video</a></li>
            <li><a href="foto.html" class="${page === 'foto.html' ? 'active' : ''}">Foto</a></li>
            <li><a href="prosjekt.html" class="${page === 'prosjekt.html' ? 'active' : ''}">Prosjekt</a></li>
            <li><a href="podcast.html" class="${page === 'podcast.html' ? 'active' : ''}">Podcast</a></li>
            <li><a href="kontakt.html" class="${page === 'kontakt.html' ? 'active' : ''}">Kontakt</a></li>
        </ul>
    `;

    document.body.prepend(nav);

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
})();
