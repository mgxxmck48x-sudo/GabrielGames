
import React from 'react';

const Navbar = ({ onHomeClick, searchQuery, setSearchQuery }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div 
          onClick={onHomeClick}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
            <i className="fas fa-gamepad text-xl text-white"></i>
          </div>
          <span className="text-xl font-extrabold tracking-tight hidden sm:block">
            Gabriel<span className="text-indigo-500">Games</span>
          </span>
        </div>

        <div className="flex-1 max-w-md relative group">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors"></i>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>1,204 Players Online</span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all transform active:scale-95 shadow-md">
            New Games
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
