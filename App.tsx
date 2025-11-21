import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import CartNotification from './components/CartNotification';
import { CartProvider } from './contexts/CartContext';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <CartProvider>
        <div className="min-h-screen bg-drip-black text-white selection:bg-drip-neon selection:text-black">
          <Navbar />
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
          <CartNotification />
        </div>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-drip-black text-white selection:bg-drip-neon selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <Products onViewDetails={(product) => setSelectedProduct(product)} />
          <HowItWorks />
          <Calculator />
        </main>
        <Footer />
        <CartNotification />
      </div>
    </CartProvider>
  );
};

export default App;