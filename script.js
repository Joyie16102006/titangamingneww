// script.js — Dynamic Engine for Titan Arc Studios

// ============================================
// 1. DATA STORE (defaults — overridden by Firebase if configured)
// ============================================

let GAMES_DATA = [
    {
        title: "Titan Arc: Legacy",
        desc: "A futuristic adventure set in a world of ancient technology and rising warriors.",
        image: "game_project_nexus.png",
        genre: "Action RPG",
        link: "#"
    },
    {
        title: "Arc Strike",
        desc: "Fast-paced competitive battles built for skill, strategy, and teamwork.",
        image: "hero_character.png",
        genre: "Multiplayer Shooter",
        link: "#"
    },
    {
        title: "Worlds Beyond",
        desc: "Explore mysterious planets, hidden cities, and cinematic story missions.",
        image: "hero_new.png",
        genre: "Open World Adventure",
        link: "#"
    },
    {
        title: "Shadow Protocol",
        desc: "Stealth-action espionage in a cyberpunk metropolis with branching narratives.",
        image: "https://res.cloudinary.com/dkbzmua32/image/upload/v1778350220/hero_character_1778182494477_tudetm.jpg",
        genre: "Action RPG",
        link: "#"
    }
];

let NEWS_DATA = [
    {
        category: "Studio Announcement",
        headline: "Titan Arc Studios Officially Launches",
        date: "MAY 2026",
        link: "#"
    },
    {
        category: "Upcoming Game Reveal",
        headline: "First Look: Titan Arc Legacy Gameplay Trailer",
        date: "JUN 2026",
        link: "#"
    },
    {
        category: "Community Update",
        headline: "Join the Arc Strike Closed Alpha",
        date: "JUL 2026",
        link: "#"
    }
];

const VALUES_DATA = [
    { icon: "🌍", title: "Immersive Worlds" },
    { icon: "🎮", title: "Player-First Design" },
    { icon: "🎬", title: "Cinematic Storytelling" }
];

let STATS_DATA = [
    { value: 4, suffix: "", label: "Games in Development" },
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 1, suffix: "M+", label: "Community Players" },
    { value: 12, suffix: "+", label: "Awards Won" }
];

let SOCIAL_LINKS_DATA = [
    {
        name: "YouTube",
        url: "https://youtube.com/@titanarcstudios26?si=RoDZeGNb6aVM83yz",
        svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
    },
    {
        name: "Discord",
        url: "https://discord.gg/XRvPhW6me",
        svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .03.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
    },
    {
        name: "Instagram",
        url: "https://instagram.com/titanarcstudios",
        svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`
    },
    {
        name: "X",
        url: "https://x.com/titanarcstudios",
        svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    }
];

const FOOTER_LINKS_DATA = [
    {
        heading: "Studio",
        links: [
            { text: "About", url: "#about" },
            { text: "Careers", url: "#careers" },
            { text: "News", url: "#news" }
        ]
    },
    {
        heading: "Games",
        links: [
            { text: "Titan Arc: Legacy", url: "#" },
            { text: "Arc Strike", url: "#" },
            { text: "Worlds Beyond", url: "#" }
        ]
    },
    {
        heading: "Legal",
        links: [
            { text: "Terms of Service", url: "#" },
            { text: "Privacy Policy", url: "#" },
            { text: "Cookie Policy", url: "#" }
        ]
    }
];

const FOOTER_SOCIAL_DATA = [
    {
        url: "https://youtube.com/@titanarcstudios26?si=RoDZeGNb6aVM83yz",
        label: "YouTube",
        svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
    },
    {
        url: "https://discord.gg/XRvPhW6me",
        label: "Discord",
        svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .03.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
    },
    {
        url: "https://x.com/titanarcstudios",
        label: "X",
        svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    }
];

let TRAIL_GAMES_DATA = [
    {
        title: "Project Nexus: Alpha",
        status: "OPEN BETA",
        statusColor: "#4CAF50",
        desc: "Experience the tactical combat system and explore the first two chapters of the campaign.",
        platform: "PC",
        players: "2.4K playing"
    },
    {
        title: "Arc Strike: Demo",
        status: "EARLY ACCESS",
        statusColor: "#FF9800",
        desc: "Jump into fast-paced multiplayer arenas. Test new weapons, maps, and ranked matchmaking.",
        platform: "PC / Console",
        players: "1.8K playing"
    },
    {
        title: "Echoes of Elysium: Prologue",
        status: "COMING SOON",
        statusColor: "#E1306C",
        desc: "A free standalone prologue to the open-world epic. Explore the Whispering Ruins.",
        platform: "PC",
        players: "Wishlist now"
    }
];


// ============================================
// 2. DYNAMIC RENDERERS
// ============================================

function renderGames(filter = "All") {
    const grid = document.getElementById('games-grid');

    // If Trails filter, render trail game cards
    if (filter === "Trails") {
        grid.innerHTML = '';
        grid.className = 'trail-games-grid-inline';
        TRAIL_GAMES_DATA.forEach((game, i) => {
            const card = document.createElement('div');
            card.className = 'trail-game-card scroll-reveal';
            card.style.animationDelay = `${i * 0.12}s`;
            card.innerHTML = `
                <div class="trail-card-header">
                    <span class="trail-status" style="background: ${game.statusColor}">${game.status}</span>
                    <span class="trail-platform">${game.platform}</span>
                </div>
                <h3 class="trail-title">${game.title}</h3>
                <p class="trail-desc">${game.desc}</p>
                <div class="trail-footer">
                    <span class="trail-players">${game.players}</span>
                    <a href="#" class="btn btn-primary trail-play-btn">Play Now</a>
                </div>
            `;
            grid.appendChild(card);
        });
        observeScrollReveal();
        return;
    }

    // Default: show regular game cards
    grid.className = 'games-grid';
    const filtered = filter === "All"
        ? GAMES_DATA
        : GAMES_DATA.filter(g => g.genre === filter);

    grid.innerHTML = '';
    filtered.forEach((game, i) => {
        const card = document.createElement('div');
        card.className = 'game-card scroll-reveal';
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="game-img-wrapper">
                <div class="game-img-placeholder">
                    <span class="placeholder-label">COMING SOON</span>
                </div>
                <div class="genre-tag">${game.genre}</div>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-desc">${game.desc}</p>
                <a href="${game.link}" class="btn-learn-more">Learn More 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
    observeScrollReveal();
}

function renderGameFilterTabs() {
    const tabsContainer = document.getElementById('game-filter-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';
    const tabs = ['All', 'Trails'];
    tabs.forEach(name => {
        const btn = document.createElement('button');
        btn.className = `filter-tab${name === 'All' ? ' active' : ''}`;
        btn.textContent = name;
        btn.addEventListener('click', () => {
            tabsContainer.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGames(name);
        });
        tabsContainer.appendChild(btn);
    });
}

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = '';
    NEWS_DATA.forEach((item, i) => {
        const card = document.createElement('a');
        card.href = item.link;
        card.className = 'news-card scroll-reveal';
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="news-img-ph"></div>
            <div class="news-content">
                <span class="news-category">${item.category}</span>
                <h3 class="news-headline">${item.headline}</h3>
                <div class="news-date">${item.date}</div>
            </div>
        `;
        grid.appendChild(card);
    });
    observeScrollReveal();
}

function renderValues() {
    const grid = document.getElementById('values-grid');
    grid.innerHTML = '';
    VALUES_DATA.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'value-card scroll-reveal';
        card.style.animationDelay = `${i * 0.15}s`;
        card.innerHTML = `
            <div class="value-icon">${item.icon}</div>
            <h4 class="value-title">${item.title}</h4>
        `;
        grid.appendChild(card);
    });
    observeScrollReveal();
}

function renderStats() {
    const grid = document.getElementById('stats-grid');
    grid.innerHTML = '';
    STATS_DATA.forEach((stat, i) => {
        const card = document.createElement('div');
        card.className = 'stat-card scroll-reveal';
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        grid.appendChild(card);
    });
    observeScrollReveal();
}

function renderSocialLinks() {
    const container = document.getElementById('social-links');
    container.innerHTML = '';
    SOCIAL_LINKS_DATA.forEach((social, i) => {
        const a = document.createElement('a');
        a.href = social.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'social-btn scroll-reveal';
        a.dataset.brand = social.name.toLowerCase();
        a.style.animationDelay = `${i * 0.1}s`;
        a.innerHTML = `${social.svg}<span>${social.name}</span>`;
        container.appendChild(a);
    });
    observeScrollReveal();
}

function renderFooterLinks() {
    const container = document.getElementById('footer-links');
    container.innerHTML = '';
    FOOTER_LINKS_DATA.forEach(col => {
        const div = document.createElement('div');
        div.className = 'footer-col';
        div.innerHTML = `<h4>${col.heading}</h4>` +
            col.links.map(l => `<a href="${l.url}">${l.text}</a>`).join('');
        container.appendChild(div);
    });
}

function renderFooterSocial() {
    const container = document.getElementById('footer-social');
    container.innerHTML = '';
    FOOTER_SOCIAL_DATA.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', social.label);
        a.innerHTML = social.svg;
        container.appendChild(a);
    });
}

function renderFooterCopyright() {
    document.getElementById('footer-copyright').textContent =
        `© ${new Date().getFullYear()} Titan Arc Studios. All rights reserved.`;
}

function renderTrailGames() {
    const grid = document.getElementById('trail-games-grid');
    if (!grid) return;
    grid.innerHTML = '';
    TRAIL_GAMES_DATA.forEach((game, i) => {
        const card = document.createElement('div');
        card.className = 'trail-game-card scroll-reveal';
        card.style.animationDelay = `${i * 0.12}s`;
        card.innerHTML = `
            <div class="trail-card-header">
                <span class="trail-status" style="background: ${game.statusColor}">${game.status}</span>
                <span class="trail-platform">${game.platform}</span>
            </div>
            <h3 class="trail-title">${game.title}</h3>
            <p class="trail-desc">${game.desc}</p>
            <div class="trail-footer">
                <span class="trail-players">${game.players}</span>
                <a href="#" class="btn btn-primary trail-play-btn">Play Now</a>
            </div>
        `;
        grid.appendChild(card);
    });
    observeScrollReveal();
}


// ============================================
// 3. INTERACTIVITY
// ============================================

// --- Preloader ---
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const fill = document.getElementById('preloader-bar-fill');
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        fill.style.width = progress + '%';
    }, 120);

    window.addEventListener('load', () => {
        // Ensure bar reaches 100%
        fill.style.width = '100%';
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.add('loaded');
        }, 600);
    });
}

// --- Scroll Progress Bar ---
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    });
}

// --- Scroll Reveal (IntersectionObserver) ---
let scrollRevealObserver;

function initScrollReveal() {
    scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observeScrollReveal();
}

function observeScrollReveal() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
        scrollRevealObserver.observe(el);
    });
}

// --- Typing Effect for Hero ---
function initTypingEffect() {
    const target1 = document.getElementById('hero-typing-target');
    const target2 = document.getElementById('hero-typing-target-2');
    const text1 = "BUILDING WORLDS.";
    const text2 = "INSPIRING PLAYERS.";

    let i = 0;
    function typeLine1() {
        if (i <= text1.length) {
            target1.textContent = text1.substring(0, i);
            i++;
            setTimeout(typeLine1, 60);
        } else {
            let j = 0;
            function typeLine2() {
                if (j <= text2.length) {
                    target2.textContent = text2.substring(0, j);
                    j++;
                    setTimeout(typeLine2, 60);
                }
            }
            typeLine2();
        }
    }
    // Start typing after preloader fades
    setTimeout(typeLine1, 1200);
}

// --- Animated Counters ---
function initCounters() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statCards = entry.target.querySelectorAll('.stat-value');
                statCards.forEach(el => animateCounter(el));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) statsObserver.observe(statsGrid);
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target + suffix;
        }
    }
    requestAnimationFrame(update);
}

// --- Active Nav Highlight on Scroll ---
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinksEl = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinksEl.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// --- Parallax on Hero Image ---
function initParallax() {
    const heroImg = document.getElementById('hero-parallax');
    if (!heroImg) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < 800) {
            heroImg.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
    });
}

// --- Back to Top Button ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Mobile Menu ---
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// --- Smooth Scroll ---
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// --- Navbar Scroll Effect ---
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


// ============================================
// 4. INIT — Boot Everything
// ============================================

// Firebase data loader — tries to read from Firestore, falls back to hardcoded defaults
async function loadFirebaseData() {
    // Check if Firebase is initialized
    if (!db) { console.log('Firebase DB not available, using defaults'); return; }
    console.log('Loading data from Firebase...');
    try {
        // Load hero config
        const heroDoc = await db.collection('site_config').doc('hero').get();
        if (heroDoc.exists) {
            const h = heroDoc.data();
            if (h.image_url) {
                const heroImg = document.querySelector('.hero-bg-img');
                if (heroImg) heroImg.src = h.image_url;
            }
            // Typing targets are set by initTypingEffect, so store for later
            window._fbHero = h;
        }

        // Load games
        const gamesSnap = await db.collection('games').orderBy('order').get();
        if (!gamesSnap.empty) {
            GAMES_DATA.length = 0;
            gamesSnap.forEach(doc => {
                const d = doc.data();
                GAMES_DATA.push({
                    title: d.title,
                    desc: d.desc,
                    image: d.image_url || '',
                    genre: d.genre || '',
                    link: d.link || '#'
                });
            });
            renderGames();
        }

        // Load trail games
        const trailSnap = await db.collection('trail_games').orderBy('order').get();
        if (!trailSnap.empty) {
            TRAIL_GAMES_DATA.length = 0;
            trailSnap.forEach(doc => {
                const d = doc.data();
                TRAIL_GAMES_DATA.push({
                    title: d.title,
                    desc: d.desc,
                    status: d.status || 'COMING SOON',
                    statusColor: d.statusColor || '#E1306C',
                    platform: d.platform || 'PC',
                    players: d.players || ''
                });
            });
        }

        // Load news
        const newsSnap = await db.collection('news').orderBy('order').get();
        if (!newsSnap.empty) {
            NEWS_DATA.length = 0;
            newsSnap.forEach(doc => {
                const d = doc.data();
                NEWS_DATA.push({
                    category: d.category,
                    headline: d.headline,
                    date: d.date,
                    link: d.link || '#'
                });
            });
            renderNews();
        }

        // Load stats
        const statsDoc = await db.collection('site_config').doc('stats').get();
        if (statsDoc.exists && statsDoc.data().items) {
            STATS_DATA.length = 0;
            statsDoc.data().items.forEach(s => STATS_DATA.push(s));
            renderStats();
            initCounters();
        }

        // Load social links
        const socialDoc = await db.collection('site_config').doc('social').get();
        if (socialDoc.exists) {
            const s = socialDoc.data();
            // Update URLs in SOCIAL_LINKS_DATA
            SOCIAL_LINKS_DATA.forEach(link => {
                const key = link.name.toLowerCase();
                if (s[key]) link.url = s[key];
            });
            renderSocialLinks();
        }

    } catch (e) {
        console.log('Firebase not configured or unavailable, using defaults:', e.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Preloader first
    initPreloader();

    // Init scroll systems before rendering (renderers call observeScrollReveal)
    initScrollProgress();
    initScrollReveal();

    // Render dynamic content with defaults first
    renderGameFilterTabs();
    renderGames();
    renderNews();
    renderValues();
    renderStats();
    renderSocialLinks();
    renderFooterLinks();
    renderFooterSocial();
    renderFooterCopyright();
    initTypingEffect();
    initCounters();
    initActiveNav();
    initParallax();
    initBackToTop();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();

    // Then try to load from Firebase (will override and re-render if data exists)
    loadFirebaseData();
});
