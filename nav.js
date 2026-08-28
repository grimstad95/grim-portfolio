(function () {
    // Rene URL-er (uten .html) — matcher både /video og /video.html
    // slik at "aktiv"-merkingen fungerer uansett hvilken form som er i adressefeltet.
    const page = (window.location.pathname.split('/').pop() || '').replace(/\.html$/, '') || 'index';

    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = `
        <a href="/" class="logo"><img src="logos/GRIM_9J_white.svg" alt="GRIM" class="logo-img"></a>
        <ul class="nav-links">
            <li><a href="/video" class="${page === 'video' ? 'active' : ''}">Video</a></li>
            <li><a href="/foto" class="${page === 'foto' ? 'active' : ''}">Foto</a></li>
            <li><a href="/prosjekt" class="${page === 'prosjekt' ? 'active' : ''}">Prosjekt</a></li>
            <li><a href="/podcast" class="${page === 'podcast' ? 'active' : ''}">Podcast</a></li>
            <li><a href="/kontakt" class="${page === 'kontakt' ? 'active' : ''}">Kontakt</a></li>
        </ul>
        <button class="nav-burger" id="nav-burger" aria-label="Åpne meny" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    `;

    document.body.prepend(nav);

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ─── Mobilmeny — burger-knapp åpner/lukker nav-links som fullbredde
    // nedtrekk. Lenkene selv navigerer bort, så ingen egen lukk-logikk
    // trengs utover å tillate Escape/klikk på knappen igjen. ──────────
    const burger = document.getElementById('nav-burger');
    burger.addEventListener('click', () => {
        const open = nav.classList.toggle('menu-open');
        burger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && nav.classList.contains('menu-open')) burger.click();
    });
})();
