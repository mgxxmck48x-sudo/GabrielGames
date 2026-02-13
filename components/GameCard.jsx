
import React from 'react';

const GameCard = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-md border border-slate-700 text-indigo-400 uppercase tracking-wider">
          {game.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <i className="fas fa-play ml-1"></i>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-1 group-hover:text-indigo-400 transition-colors line-clamp-1">{game.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{game.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
