import React from 'react';

export default function Overlay() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between p-8 md:p-12 pointer-events-none">
      {/* Navbar */}
      <header className="flex justify-between items-start w-full pointer-events-auto">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-white drop-shadow-md">
            YELL LAB
          </h1>
          <p className="text-xs text-neutral-300 font-mono mt-1 drop-shadow-sm">EST. 202X — PARIS</p>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {['COLLECTION', 'ARCHIVE', 'ABOUT', 'CART (0)'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-red-500 transition-colors uppercase text-white drop-shadow-md"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-white uppercase text-xs border border-white/20 px-3 py-1 backdrop-blur-sm">
          Menu
        </button>
      </header>

      {/* Hero Content - Déplacé vers le bas gauche pour laisser respirer le centre */}
      <main className="flex flex-col items-start justify-end flex-grow pb-12 z-10 pointer-events-auto">
        <div className="relative">
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter text-white mix-blend-overlay opacity-90">
             RAW ELEGANCE
          </h2>
        </div>
        
        <p className="mt-4 max-w-md text-neutral-200 text-sm md:text-base font-light leading-relaxed drop-shadow-md">
          Experimental jewelry for the modern distinct. 
          <br/>Handcrafted in limited quantities.
        </p>

        <button className="mt-8 group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 shadow-lg shadow-red-900/20">
          <span className="relative z-10 group-hover:text-white transition-colors">Shop the Drop</span>
          <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
        </button>
      </main>

      {/* Footer / Socials */}
      <footer className="flex justify-between items-end w-full pointer-events-auto">
        <div className="flex gap-6 text-xs font-mono text-neutral-300">
          <a href="https://www.instagram.com/yell_lab/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">INSTAGRAM</a>
          <a href="https://www.tiktok.com/@grillz.yelllab?_r=1&_t=ZN-91hAucNFpCg" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">TIKTOK</a>
        </div>
        
        <div className="text-right text-white drop-shadow-md">
           <span className="block text-xs text-neutral-300 uppercase">Next Drop</span>
           <span className="block font-display text-lg text-red-500">OCT 24</span>
        </div>
      </footer>
    </div>
  );
}
