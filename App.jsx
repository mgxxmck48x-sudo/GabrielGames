
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import GameCard from './components/GameCard.jsx';
import GameView from './components/GameView.jsx';
import { GAMES_DATA, CATEGORIES } from './data/games.js';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleHomeClick = () => {
    setSelectedGame(null);
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar 
        onHomeClick={handleHomeClick} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 md:px-8 overflow-y-auto no-scrollbar">
        {selectedGame ? (
          <GameView 
            game={selectedGame} 
            onBack={() => setSelectedGame(null)} 
          />
        ) : (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            {!searchQuery && activeCategory === 'All' && (
              <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] bg-indigo-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=400&fit=crop" 
                  alt="Featured" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-12">
                  <div className="bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-[0.2em]">
                    Featured Today
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                    Play Without Limits.
                  </h1>
                  <p className="text-slate-300 text-lg max-w-xl hidden md:block">
                    Your premium source for unblocked browser games. Fast, free, and designed for speed.
                  </p>
                </div>
              </div>
            )}

            {/* Category Selector */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Game Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {searchQuery ? `Search results for "${searchQuery}"` : activeCategory === 'All' ? 'Popular Games' : `${activeCategory} Games`}
                </h2>
                <div className="text-slate-500 text-sm">
                  {filteredGames.length} {filteredGames.length === 1 ? 'Game' : 'Games'} found
                </div>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGames.map(game => (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onClick={(g) => setSelectedGame(g)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-4 border border-slate-800">
                    <i className="fas fa-ghost text-3xl text-slate-700"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">No games found</h3>
                  <p className="text-slate-500">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
              <i className="fas fa-gamepad text-indigo-400"></i>
            </div>
            <span className="font-bold text-lg">GabrielGames</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Suggest a Game</a>
          </div>

          <div className="text-slate-500 text-xs">
            © 2024 GabrielGames. All rights reserved. Play responsibly.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
