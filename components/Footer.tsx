import React from 'react';
import { Instagram, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
                DRIPZY<span className="text-drip-neon">.</span>
            </span>
            <p className="text-gray-500 mt-4 max-w-sm">
              The first community-owned fashion ecosystem. Stop making celebrities rich. Start making your wardrobe pay you back.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-drip-neon">Terms of Service</a></li>
              <li><a href="#" className="hover:text-drip-neon">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-drip-neon">Cashback Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Socials</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Dripzy. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Designed for the Community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;