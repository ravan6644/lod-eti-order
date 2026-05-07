import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X, User, Home, UtensilsCrossed, Star, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'loyalty', label: 'Rewards', icon: Star },
    { id: 'tracking', label: 'Track Order', icon: Truck },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-serif font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-serif font-bold text-amber-900 hidden sm:block">LOD <span className="text-amber-600">DELICACY</span></span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  activePage === item.id ? 'text-amber-600' : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                <item.icon className="w-4 h-4 mr-1.5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-amber-600 text-white w-5 h-5 flex items-center justify-center p-0 text-[10px] rounded-full">
                  {totalItems}
                </Badge>
              )}
            </button>
            <div className="hidden sm:block">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-3 py-3 rounded-md text-base font-medium ${
                  activePage === item.id ? 'bg-amber-50 text-amber-600' : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('cart');
                setIsOpen(false);
              }}
              className="flex items-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-amber-50"
            >
              <ShoppingCart className="w-5 h-5 mr-3" />
              Cart ({totalItems})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;