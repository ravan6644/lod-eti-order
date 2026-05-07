import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, FoodItem } from '../types';
import { toast } from 'sonner';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: FoodItem, quantity: number, customization?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: FoodItem, quantity: number, customization?: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.customization === customization);
      if (existing) {
        toast.success(`Updated ${item.name} quantity in cart`);
        return prev.map((i) =>
          i.id === item.id && i.customization === customization
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      toast.success(`Added ${item.name} to cart`);
      return [...prev, { ...item, quantity, customization }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
    toast.info('Item removed from cart');
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};