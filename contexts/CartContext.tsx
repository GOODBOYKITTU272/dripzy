import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface CartItem {
    product: Product;
    color: string;
    size: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, color: string, size: string) => void;
    removeFromCart: (index: number) => void;
    clearCart: () => void;
    totalItems: number;
    showNotification: boolean;
    notificationMessage: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const addToCart = (product: Product, color: string, size: string) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(
                item => item.product.id === product.id && item.color === color && item.size === size
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += 1;
                return newCart;
            }

            return [...prevCart, { product, color, size, quantity: 1 }];
        });

        setNotificationMessage(`${product.name} (${color}, ${size}) added to cart!`);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const removeFromCart = (index: number) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, showNotification, notificationMessage }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
