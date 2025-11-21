import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Star, Check, Zap } from 'lucide-react';
import { Product } from '../types';
import ThreeDViewer from './ThreeDViewer';
import { useCart } from '../contexts/CartContext';

interface ProductDetailProps {
    product: Product;
    onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('');
    const [sizeError, setSizeError] = useState(false);
    const { addToCart } = useCart();

    // Both products now have single Dripzy branded design only
    const isRoundNeck = product.id === 'round-neck';

    // Single design for each product - no color variants
    // Round Neck -> /dripzy_round_neck.png
    // Polo -> /black_polo_3d.png (Clean version)
    const colors = isRoundNeck
        ? [{ label: 'Dripzy Edition', value: 'black', image: '/dripzy_round_neck.png', bg: 'bg-black', border: 'border-white' }]
        : [{ label: 'Dripzy Edition', value: 'black', image: '/black_polo_3d.png', bg: 'bg-black', border: 'border-white' }];

    const currentImage = colors.find(c => c.value === selectedColor)?.image || product.image;
    const currentColorLabel = colors.find(c => c.value === selectedColor)?.label || 'Dripzy Edition';

    const handleAddToCart = () => {
        if (!selectedSize) {
            setSizeError(true);
            setTimeout(() => setSizeError(false), 2000);
            return;
        }

        addToCart(product, currentColorLabel, selectedSize);
    };

    return (
        <div className="min-h-screen bg-drip-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </button>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT: Product Info */}
                    <div className="space-y-6 order-2 lg:order-1">
                        {/* Header Section */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="bg-drip-neon text-black font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide">
                                    {product.tag}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                    <span className="text-gray-400 text-sm ml-2">({product.reviews}+ Reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
                                {product.name}
                            </h1>

                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-4xl font-bold text-drip-neon">₹{product.price}</span>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-drip-neon/30 pl-4">
                                {product.description}
                            </p>
                        </div>

                        {/* Size Selector - No color selector since both products have single design */}
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                                Select Size
                                {sizeError && <span className="text-red-400 text-xs normal-case ml-2 animate-pulse">(Required)</span>}
                            </h3>
                            <div className="flex gap-3">
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all font-bold text-lg relative ${selectedSize === size
                                            ? 'bg-drip-neon text-black border-drip-neon scale-110'
                                            : 'border-white/20 hover:border-drip-neon hover:text-drip-neon hover:scale-105'
                                            } ${sizeError && !selectedSize ? 'animate-pulse border-red-500' : ''}`}
                                    >
                                        {size}
                                        {selectedSize === size && (
                                            <Check size={16} className="absolute -top-2 -right-2 bg-black text-drip-neon rounded-full p-0.5" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Premium Features</h3>
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 hover:bg-white/10 transition-colors">
                                    <div className="bg-drip-neon/10 p-3 rounded-lg h-fit">
                                        <feature.icon className="text-drip-neon" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white text-base mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 pt-4 pb-2 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Check size={16} className="text-drip-neon" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Check size={16} className="text-drip-neon" />
                                <span>7-Day Returns</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Check size={16} className="text-drip-neon" />
                                <span>100% Authentic</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: 3D Viewer + Sticky CTA */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-24 space-y-6">
                        {/* 3D Mockup Viewer */}
                        <div className="w-full flex items-center justify-center min-h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8">
                            <ThreeDViewer src={currentImage} alt={product.name} />
                        </div>

                        {/* CTA Buttons - ALWAYS ON RIGHT */}
                        <div className="sticky top-[600px] space-y-4 bg-drip-black/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-drip-neon text-black font-bold py-5 px-8 rounded-xl hover:bg-lime-300 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(190,242,100,0.4)] text-lg"
                            >
                                <ShoppingBag size={22} />
                                Add to Cart
                            </button>

                            <button className="w-full bg-white text-black font-bold py-5 px-8 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 text-lg">
                                <Zap size={22} fill="currentColor" />
                                Buy Now
                            </button>

                            <p className="text-center text-xs text-gray-500 pt-2">
                                Secure checkout • Money-back guarantee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
