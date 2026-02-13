
import React, { useState, useEffect, useRef } from 'react';

const GameView = ({ game, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const loadGame = async () => {
      if (!iframeRef.current) return;

      if (game.isClean) {
        setIsLoading(true);
        try {
          const response = await fetch(game.iframeUrl);
          if (!response.ok) throw new Error("Fetch failed");
          const html = await response.text();
          iframeRef.current.srcdoc = html;
        } catch (error) {
          console.error("Clean injection failed, falling back to src", error);
          iframeRef.current.src = game.iframeUrl;
        } finally {
          setIsLoading(false);
        }
      } else {
        iframeRef.current.src = game.iframeUrl;
      }
    };

    loadGame();
  }, [game]);

  const toggleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (isFullscreen) {
        if (document.exitFullscreen) document.exitFullscreen();
      } else {
        if (iframe.requestFullscreen) iframe.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 animate-in fade-in zoom-in duration-300">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-2 px-4 rounded-lg bg-slate-800/50 border border-slate-700"
        >
          <i className="fas fa-arrow-left"></i>
          <span className="font-medium">Back to Lobby</span>
        </button>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all"
          >
            <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 min-h-[500px]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10">
            <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
            <p className="font-bold">Cleaning Game...</p>
            <p className="text-xs text-slate-400 mt-2">Removing ads and wrappers</p>
          </div>
        )}
        <iframe
          ref={iframeRef}
          id="game-iframe"
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
        ></iframe>
      </div>

      <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-black">{game.title}</h2>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">
                {game.category}
              </span>
              {game.isClean && (
                <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded border border-green-500/20 uppercase">
                  Ad-Free Mode
                </span>
              )}
            </div>
            <p className="text-slate-400 max-w-2xl">{game.description}</p>
          </div>
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8">
            <div className="text-center">
              <div className="text-xl font-bold">4.8</div>
              <div className="text-xs text-slate-500 uppercase tracking-tighter">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">12K</div>
              <div className="text-xs text-slate-500 uppercase tracking-tighter">Plays</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;
