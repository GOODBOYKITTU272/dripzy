import React from 'react';
import { ArrowRight, TrendingUp, ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-drip-black min-h-screen flex items-center justify-center pt-20 pb-12">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-drip-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-drip-neon/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-drip-neon animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-300">Essentials, Perfected. Rewards, Reinvented.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up delay-100">
          WE DON'T PAY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">CELEBRITIES.</span><br />
          <span className="text-drip-neon">WE PAY YOU.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-up delay-200 px-2">
          Dripzy is the anti-brand. We stripped away the clutter to focus on two things:
          The Perfect Product and The Perfect Reward System.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-3xl justify-center animate-fade-in-up delay-300 px-2">
          <a href="#how-it-works" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-drip-neon text-black font-bold text-base sm:text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(190,242,100,0.5)] flex items-center justify-center">
            <span className="relative z-10 flex items-center gap-2">
              Start Earning <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
          </a>
          <a href="#products" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border border-white/10 font-bold text-base sm:text-lg rounded-full hover:bg-white/20 transition-all flex items-center gap-2 justify-center">
            <ShoppingBag size={18} />
            Shop Collection
          </a>
          <a href="#manifesto" className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white border border-white/10 font-bold text-base sm:text-lg rounded-full hover:bg-white/5 transition-all flex items-center gap-2 justify-center">
            <TrendingUp size={18} />
            The Manifesto
          </a>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center w-full max-w-4xl border-t border-white/10 pt-6 sm:pt-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">20%</h3>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Referral Cashback</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">15%</h3>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Weekly Revenue</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">₹999</h3>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Fixed Price</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">100%</h3>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Cotton Bio-Wash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;