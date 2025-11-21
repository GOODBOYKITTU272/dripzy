import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductsProps {
    onViewDetails: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onViewDetails }) => {
    return (
        <section id="products" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-drip-neon font-display font-bold tracking-wider uppercase mb-2 block">The Collection</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">WE DON'T SELL 10 THINGS.<br />WE MASTER 2.</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Most brands chase trends. We chase perfection. We spent all our energy mastering the only two T-shirts a man actually needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group relative bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-drip-neon/30 transition-all duration-300 flex flex-col">
                            <div className="absolute top-0 right-0 p-6 z-10">
                                <span className="bg-white text-black font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">{product.tag}</span>
                            </div>
                            <div className="p-8 pt-16 flex-grow">
                                <div className="flex items-baseline gap-4 mb-4">
                                    <h3 className="text-3xl font-display font-bold text-white">{product.name}</h3>
                                    <span className="text-xl text-drip-neon font-bold">₹{product.price}</span>
                                </div>
                                <p className="text-gray-400 mb-8">
                                    {product.description}
                                </p>

                                <ul className="space-y-6">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="bg-white/5 p-3 rounded-xl h-fit">
                                                <feature.icon className={idx === 0 ? "text-drip-purple" : idx === 1 ? "text-drip-neon" : "text-blue-400"} size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">{feature.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                onClick={() => onViewDetails(product)}
                                className="p-8 border-t border-white/5 bg-white/5 mt-4 group-hover:bg-drip-neon group-hover:text-black transition-colors cursor-pointer"
                            >
                                <div className="flex justify-between items-center font-bold">
                                    <span>View Product Details</span>
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">We sell fashion first. You stay because it pays you back.</p>
                    <a href="#calculator" className="inline-block text-drip-neon border-b border-drip-neon pb-0.5 hover:opacity-80">Calculate your potential earnings →</a>
                </div>
            </div>
        </section>
    );
};

export default Products;