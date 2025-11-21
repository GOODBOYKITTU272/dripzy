import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Clickable Home Button */}
          <div className="flex items-center gap-2">
            <a href="#" className="text-2xl font-display font-bold text-white tracking-wide hover:opacity-80 transition-opacity cursor-pointer">
              DRIPZY<span className="text-drip-neon">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#manifesto" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Manifesto</a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Products</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">How It Works</a>
            <a href="#calculator" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Earning Calculator</a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#products" className="bg-drip-neon text-black px-6 py-2.5 rounded-full font-bold hover:bg-lime-300 transition-colors text-sm tracking-wide">JOIN THE DRIP</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 px-4 animate-fade-in">
          <div className="flex flex-col gap-6 items-center">
            <a href="#manifesto" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">Manifesto</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">Products</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">How It Works</a>
            <a href="#calculator" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">Earning Calculator</a>
            <button className="w-full max-w-xs bg-drip-neon text-black py-3 rounded-xl font-bold">
              JOIN THE DRIP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;