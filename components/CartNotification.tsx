import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartNotification: React.FC = () => {
    const { showNotification, notificationMessage } = useCart();

    if (!showNotification) return null;

    return (
        <div className="fixed top-24 right-4 z-50 animate-fade-in">
            <div className="bg-drip-neon text-black px-6 py-4 rounded-lg shadow-[0_0_30px_rgba(190,242,100,0.5)] flex items-center gap-3 font-bold">
                <CheckCircle size={24} className="flex-shrink-0" />
                <span>{notificationMessage}</span>
            </div>
        </div>
    );
};

export default CartNotification;
