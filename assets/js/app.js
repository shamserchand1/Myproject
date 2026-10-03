const articles = [
  {
    id: 1,
    category: 'Apps',
    title: 'Top 15 Productivity Apps for Students in 2026',
    excerpt: 'A tested list of apps for note-taking, planning, and deep-focus study sessions across phone and desktop.',
    date: 'Apr 11, 2026',
    readTime: '6 min read',
    views: '12.5K views',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80',
    alt: 'Student using productivity apps on tablet and laptop'
  },
  {
    id: 2,
    category: 'Windows',
    title: 'How to Speed Up Your Windows 11 PC',
    excerpt: 'Practical cleanup, startup, and storage tweaks that improve performance without risky registry hacks.',
    date: 'Apr 10, 2026',
    readTime: '7 min read',
    views: '18.2K views',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    alt: 'Windows laptop on desk showing settings optimization'
  },
  {
    id: 3,
    category: 'How To',
    title: 'How to Use WhatsApp Like a Pro – 10 Hidden Tips',
    excerpt: 'Master chat folders, privacy controls, pinned messages, and time-saving shortcuts for daily communication.',
    date: 'Apr 9, 2026',
    readTime: '5 min read',
    views: '9.9K views',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
    alt: 'Hand using WhatsApp on smartphone screen'
  },
  {
    id: 4,
    category: 'Reviews',
    title: 'Best Budget Smartphones in 2026 – Complete Guide',
    excerpt: 'Our picks for camera quality, display, battery, and software support under practical budgets.',
    date: 'Apr 8, 2026',
    readTime: '9 min read',
    views: '22.1K views',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
    alt: 'Row of modern budget smartphones on display'
  },
  {
    id: 5,
    category: 'Internet',
    title: 'Best Free Online Tools You Should Know',
    excerpt: 'A curated toolkit for file conversion, collaboration, visual editing, and secure sharing in 2026.',
    date: 'Apr 7, 2026',
    readTime: '6 min read',
    views: '11.3K views',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    alt: 'Laptop with web tools dashboard open in browser'
  },
  {
    id: 6,
    category: 'How To',
    title: '10 Useful Keyboard Shortcuts for Daily Use',
    excerpt: 'Universal shortcuts that make work faster across Windows, browsers, and productivity software.',
    date: 'Apr 6, 2026',
    readTime: '4 min read',
    views: '7.4K views',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    alt: 'Close-up of keyboard for shortcut productivity'
  },
  {
    id: 7,
    category: 'Tech News',
    title: 'AI PCs in 2026: What On-Device Intelligence Really Means',
    excerpt: 'Vendors promise smarter local performance. We break down what users can actually expect this year.',
    date: 'Apr 5, 2026',
    readTime: '5 min read',
    views: '8.8K views',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80',
    alt: 'Futuristic AI processor illustration on motherboard'
  },
  {
    id: 8,
    category: 'Android',
    title: 'Android Battery Health: 12 Settings That Actually Help',
    excerpt: 'A straightforward guide to extending battery lifespan through smart charging and app controls.',
    date: 'Apr 4, 2026',
    readTime: '6 min read',
    views: '10.1K views',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80',
    alt: 'Android phone charging on desk beside smartwatch'
  },
  {
    id: 9,
    category: 'Reviews',
    title: 'Wi-Fi 7 Routers Compared: Speed, Range, and Value',
    excerpt: 'Hands-on performance notes from real home-office setups to help you choose the right router.',
    date: 'Apr 3, 2026',
    readTime: '8 min read',
    views: '13.2K views',
    image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern Wi-Fi router with glowing status lights'
  }
];

const trending = [
  { title: 'Windows 11 26H1: First Week Performance Notes', date: 'Apr 12, 2026', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80', alt: 'Coding monitor and keyboard desk setup' },
  { title: 'Best Android Launchers for Clean Home Screens', date: 'Apr 10, 2026', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80', alt: 'Android home screen close-up' },
  { title: '5 Browser Extensions Every Researcher Needs', date: 'Apr 9, 2026', image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=300&q=80', alt: 'Web analytics open in browser' },
  { title: 'Quick File-Sharing Tools That Respect Privacy', date: 'Apr 8, 2026', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80', alt: 'Laptop showing secure file sharing interface' },
  { title: 'Best Value Laptops for Hybrid Work in 2026', date: 'Apr 7, 2026', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=300&q=80', alt: 'Modern ultrabook laptop on minimalist table' }
];

const picks = [
  { title: 'Essential AI Tools for Everyday Office Tasks', date: 'Apr 6, 2026', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=700&q=80', alt: 'AI interface visualization on blue background' },
  { title: 'How To Secure Your Home Wi-Fi in Under 15 Minutes', date: 'Apr 5, 2026', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80', alt: 'Network device and lock icon concept' },
  { title: 'Cloud Storage Comparison: Pricing vs Privacy', date: 'Apr 4, 2026', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=700&q=80', alt: 'Cloud computing concept on laptop screen' },
  { title: 'Laptop Buying Guide 2026: CPU, RAM, Battery Explained', date: 'Apr 3, 2026', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=700&q=80', alt: 'Open laptop with comparison charts on screen' }
];

const articleGrid = document.getElementById('articleGrid');
const noResults = document.getElementById('noResults');
const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const searchDesktop = document.getElementById('searchInputDesktop');
const searchMobile = document.getElementById('searchInputMobile');
let activeCategory = 'All';
let activeQuery = '';

function articleTemplate(article) {
  return `
    <article class="col-md-6 col-lg-4 article-item" data-category="${article.category}" data-search="${`${article.title} ${article.excerpt} ${article.category}`.toLowerCase()}">
      <div class="article-card h-100">
        <img src="${article.image}" alt="${article.alt}" loading="lazy" width="800" height="450">
        <div class="p-3 d-flex flex-column">
          <p class="mb-2"><span class="badge text-bg-primary">${article.category}</span></p>
          <h3 class="h6"><a href="#">${article.title}</a></h3>
          <p class="text-muted small">${article.excerpt}</p>
          <p class="meta mt-auto mb-0">${article.date} · ${article.readTime} · ${article.views}</p>
        </div>
      </div>
    </article>
  `;
}

function renderArticles() {
  articleGrid.innerHTML = articles.map(articleTemplate).join('');
  applyFilters();
}

function renderTrending() {
  document.getElementById('trendingList').innerHTML = trending.map((item, idx) => `
    <article class="trending-item d-flex gap-3 p-2 align-items-center">
      <span class="rank">${idx + 1}</span>
      <img src="${item.image}" alt="${item.alt}" loading="lazy" width="86" height="86">
      <div>
        <h3 class="h6 mb-1"><a href="#">${item.title}</a></h3>
        <p class="meta mb-0">${item.date}</p>
      </div>
    </article>
  `).join('');
}

function renderPicks() {
  document.getElementById('editorsPick').innerHTML = picks.map(item => `
    <article class="col-sm-6 col-lg-3">
      <div class="pick-card h-100">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" width="700" height="394">
        <div class="p-3">
          <h3 class="h6"><a href="#">${item.title}</a></h3>
          <p class="meta mb-0">${item.date} · ${item.readTime}</p>
        </div>
      </div>
    </article>
  `).join('');
}

function applyFilters() {
  const cards = Array.from(document.querySelectorAll('.article-item'));
  let visibleCount = 0;
  cards.forEach(card => {
    const category = card.dataset.category;
    const searchable = card.dataset.search;
    const matchesCategory = activeCategory === 'All' || category === activeCategory;
    const matchesQuery = !activeQuery || searchable.includes(activeQuery);
    const isVisible = matchesCategory && matchesQuery;
    card.classList.toggle('d-none', !isVisible);
    if (isVisible) visibleCount += 1;
  });
  noResults.classList.toggle('d-none', visibleCount > 0);
}

function bindFilters() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      activeCategory = button.dataset.filter;
      applyFilters();
    });
  });
}

function bindSearch() {
  function handleInput(event) {
    activeQuery = event.target.value.trim().toLowerCase();
    if (event.target === searchDesktop && searchMobile) searchMobile.value = event.target.value;
    if (event.target === searchMobile && searchDesktop) searchDesktop.value = event.target.value;
    applyFilters();
  }
  if (searchDesktop) searchDesktop.addEventListener('input', handleInput);
  if (searchMobile) searchMobile.addEventListener('input', handleInput);
}

function renderDateAndYear() {
  const now = new Date();
  const dateEl = document.getElementById('current-date');
  const yearEl = document.getElementById('year');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  if (yearEl) yearEl.textContent = now.getFullYear();
}

renderDateAndYear();
renderArticles();
renderTrending();
renderPicks();
bindFilters();
bindSearch();
