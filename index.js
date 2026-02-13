
// --- Game Data ---
const GAMES_DATA = [
  {
    id: 'basket-random',
    title: 'Basket Random',
    description: 'Quirky 2-player basketball action! Every round features different physics, players, and hoops for maximum randomness.',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1519861531473-9200362f48b3?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://64345986-62434566.preview.editmysite.com/uploads/9/9/0/8/139890129/custom_themes/104868751615748392/files/br.xml',
    isClean: true
  },
  {
    id: 'gvibes',
    title: 'GVibes',
    description: 'A fast-paced rhythmic arcade game. Navigate through obstacles with perfect timing and chill vibes.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/bodrumkat/tamam@main/12.xml',
    isClean: true
  },
  {
    id: 'football-bros',
    title: 'Football Bros',
    description: 'The ultimate unblocked football experience! Choose your team and dominate the field with incredible plays.',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://footballbros.io/',
    isClean: false
  },
  {
    id: 'snow-rider-3d',
    title: 'Snow Rider 3D',
    description: 'Exhilarating 3D winter world! Dodge obstacles and collect gifts on a high-speed sled ride.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1517176642928-5807dc58893c?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/hyperwood/turn@004d852c621ecc4fbd99a0bcbe6d10377e34cdd0/lib/sr.xml',
    isClean: true
  },
  {
    id: 'slither-io-2',
    title: 'Slither.io 2',
    description: 'The evolution of the classic snake game. Eat orbs, grow massive, and trap your rivals.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/kelsimsk/wahx@main/2.xml',
    isClean: true
  },
  {
    id: 'gunspin',
    title: 'Gunspin',
    description: 'Master the art of the recoil! Spin your gun through the air and shoot to travel as far as possible.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/gru6nny/ohd@main/qad.xml',
    isClean: true
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    description: 'Expand your territory and conquer the arena in this addictive multiplayer strategy game.',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/centerclassroom/mc55@main/paper-io-2.xml',
    isClean: true
  },
  {
    id: 'archers',
    title: 'Archers',
    description: 'A classic test of aim and precision. Launch your arrows to defeat enemies in this arcade challenge.',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1511078573424-60e53a30283c?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/ertemr33/qaza@main/1.xml',
    isClean: true
  },
  {
    id: 'basket-bros',
    title: 'Basket Bros',
    description: 'Fast-paced 1-on-1 basketball action. Slam dunk, block shots, and outplay your opponent.',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    iframeUrl: 'https://cdn.jsdelivr.net/gh/testamalame/100vs@main/saf.xml',
    isClean: true
  }
];

const CATEGORIES = ['All', 'Action', 'Puzzle', 'Sports', 'Arcade', 'Strategy', 'Retro'];

// --- Application State ---
const state = {
  games: GAMES_DATA,
  selectedGame: null,
  searchQuery: '',
  activeCategory: 'All',
};

// --- Components ---
const Navbar = () => `
  <nav class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 md:px-8">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div id="nav-home" class="flex items-center gap-2 cursor-pointer group">
        <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
          <i class="fas fa-gamepad text-xl text-white"></i>
        </div>
        <span class="text-xl font-extrabold tracking-tight hidden sm:block text-white">
          Gabriel<span class="text-indigo-500">Games</span>
        </span>
      </div>

      <div class="flex-1 max-w-md relative group">
        <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors"></i>
        <input
          id="search-input"
          type="text"
          placeholder="Search unblocked..."
          value="${state.searchQuery}"
          class="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm text-white"
        />
      </div>

      <div class="hidden md:flex items-center gap-6 text-sm font-medium">
        <div class="flex items-center gap-2 text-slate-400">
          <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Secure Ad-Free Mode</span>
        </div>
      </div>
    </div>
  </nav>
`;

const GameCard = (game) => `
  <div 
    data-game-id="${game.id}"
    class="game-card group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full shadow-lg"
  >
    <div class="relative aspect-video overflow-hidden">
      <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-md border border-slate-700 text-indigo-400 uppercase">
        ${game.category}
      </div>
      <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <i class="fas fa-play ml-1"></i>
        </div>
      </div>
    </div>
    <div class="p-4 flex-1">
      <h3 class="font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors text-base">${game.title}</h3>
      <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed">${game.description}</p>
    </div>
  </div>
`;

const GameView = (game) => `
  <div class="flex flex-col h-[calc(100vh-160px)] space-y-4">
    <div class="flex items-center justify-between">
      <button id="back-to-lobby" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-2 px-4 rounded-lg bg-slate-800 border border-slate-700">
        <i class="fas fa-arrow-left"></i>
        <span>Back to Lobby</span>
      </button>
      <div class="flex gap-2">
        <button id="toggle-fullscreen" class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 transition-all">
          <i class="fas fa-expand"></i>
          <span class="hidden sm:inline">Fullscreen</span>
        </button>
      </div>
    </div>
    <div class="relative flex-1 bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
      <div id="game-loader" class="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10 hidden">
        <div class="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
        <p class="font-bold text-lg">Initializing...</p>
        <p class="text-xs text-slate-400 mt-2">Connecting to secure game server</p>
      </div>
      <iframe 
        id="game-iframe" 
        class="w-full h-full border-none bg-black" 
        allowfullscreen 
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
      ></iframe>
    </div>
    <div class="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
       <h2 class="text-xl font-bold text-white mb-1">${game.title}</h2>
       <p class="text-slate-400 text-sm">${game.description}</p>
    </div>
  </div>
`;

// --- Game Loading Logic ---
async function injectGame(game) {
  const iframe = document.getElementById('game-iframe');
  const loader = document.getElementById('game-loader');
  if (!iframe) return;

  if (game.isClean) {
    if (loader) loader.classList.remove('hidden');
    try {
      const res = await fetch(game.iframeUrl);
      const xmlText = await res.text();
      
      // Parse XML to extract content if it's wrapped in <Content> (common for unblocked sources)
      let finalHtml = xmlText;
      if (xmlText.includes('<Content>')) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const contentNode = xmlDoc.querySelector("Content");
        if (contentNode) finalHtml = contentNode.textContent;
      }
      
      iframe.srcdoc = finalHtml;
      setTimeout(() => loader?.classList.add('hidden'), 800);
    } catch (e) {
      iframe.src = game.iframeUrl;
      loader?.classList.add('hidden');
    }
  } else {
    iframe.src = game.iframeUrl;
  }
}

// --- Main Render Function ---
const render = () => {
  const app = document.getElementById('app');
  if (!app) return;

  const filteredGames = state.games.filter(game => 
    (game.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
     game.description.toLowerCase().includes(state.searchQuery.toLowerCase())) &&
    (state.activeCategory === 'All' || game.category === state.activeCategory)
  );

  if (state.selectedGame) {
    app.innerHTML = `
      <div class="min-h-screen flex flex-col bg-slate-950">
        ${Navbar()}
        <main class="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          ${GameView(state.selectedGame)}
        </main>
      </div>
    `;
    setTimeout(() => injectGame(state.selectedGame), 50);
  } else {
    app.innerHTML = `
      <div class="min-h-screen flex flex-col bg-slate-950">
        ${Navbar()}
        <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-8 border-b border-slate-900">
            ${CATEGORIES.map(cat => `
              <button data-category="${cat}" class="filter-btn px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                state.activeCategory === cat ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }">${cat}</button>
            `).join('')}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            ${filteredGames.length > 0 
              ? filteredGames.map(game => GameCard(game)).join('') 
              : `<div class="col-span-full py-20 text-center text-slate-500">No games found matches your criteria.</div>`
            }
          </div>
        </main>
      </div>
    `;
  }

  attachEventListeners();
};

const attachEventListeners = () => {
  document.getElementById('nav-home')?.addEventListener('click', () => {
    state.selectedGame = null;
    state.searchQuery = '';
    state.activeCategory = 'All';
    render();
  });
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      // We don't re-render everything to preserve focus if possible, 
      // but in this template we do to keep it simple.
      render();
      const input = document.getElementById('search-input');
      if (input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.category;
      render();
    });
  });

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const game = state.games.find(g => g.id === card.dataset.gameId);
      state.selectedGame = game;
      render();
    });
  });

  document.getElementById('back-to-lobby')?.addEventListener('click', () => {
    state.selectedGame = null;
    render();
  });

  document.getElementById('toggle-fullscreen')?.addEventListener('click', () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    }
  });
};

// Initial Render
render();
