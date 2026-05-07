import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import TrackOrder from './pages/TrackOrder';
import Loyalty from './pages/Loyalty';
import FoodDetailModal from './components/food/FoodDetailModal';
import { FoodItem } from './types';
import { Toaster } from './components/ui/sonner';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Inject fonts and global styles if we can't modify index.html/css
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --font-serif: "Playfair Display", serif;
        --font-sans: "Inter", system-ui, sans-serif;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-serif) !important;
      }
      body {
        font-family: var(--font-sans) !important;
        background-color: #FFFBEB !important;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleSelectItem = (item: FoodItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} onSelectItem={handleSelectItem} />;
      case 'menu':
        return <Menu onSelectItem={handleSelectItem} />;
      case 'cart':
        return <Cart onNavigate={setActivePage} />;
      case 'tracking':
        return <TrackOrder />;
      case 'loyalty':
        return <Loyalty />;
      default:
        return <Home onNavigate={setActivePage} onSelectItem={handleSelectItem} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FFFBEB] font-sans text-gray-900 selection:bg-amber-200 selection:text-amber-900">
        <Navbar activePage={activePage} onNavigate={setActivePage} />
        
        <main className="animate-in fade-in duration-500">
          {renderPage()}
        </main>

        <footer className="bg-amber-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-serif font-bold text-xl">L</span>
                  </div>
                  <span className="text-2xl font-serif font-bold">LOD DELICACY</span>
                </div>
                <p className="text-amber-200/70 max-w-sm mb-6">
                  Experience the finest digital ordering platform for local delicacies in Eti-Osa. 
                  Streamlining flavors from our kitchen to your doorstep.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.365-.333 2.632-1.308 3.607-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-4 text-amber-200/60">
                  <li><button onClick={() => setActivePage('menu')} className="hover:text-amber-400 transition-colors">Digital Menu</button></li>
                  <li><button onClick={() => setActivePage('loyalty')} className="hover:text-amber-400 transition-colors">Rewards Program</button></li>
                  <li><button onClick={() => setActivePage('tracking')} className="hover:text-amber-400 transition-colors">Track Order</button></li>
                  <li><button className="hover:text-amber-400 transition-colors">About Us</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-4 text-amber-200/60">
                  <li><button className="hover:text-amber-400 transition-colors">Contact Support</button></li>
                  <li><button className="hover:text-amber-400 transition-colors">Privacy Policy</button></li>
                  <li><button className="hover:text-amber-400 transition-colors">Terms of Service</button></li>
                  <li><button className="hover:text-amber-400 transition-colors">Refund Policy</button></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-amber-200/40">
              <p>© 2024 LOD DELICACY. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Made with ❤️ in Eti-Osa</p>
            </div>
          </div>
        </footer>

        <FoodDetailModal 
          item={selectedItem} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
        <Toaster position="bottom-right" richColors />
      </div>
    </CartProvider>
  );
}

export default App;