import React from 'react';
import { FoodItem } from '../types';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import FoodCard from '../components/food/FoodCard';

const featuredItems: FoodItem[] = [
  {
    id: '1',
    name: 'Jollof Rice Deluxe',
    description: 'Smoky party-style jollof served with grilled chicken, fried plantains, and our signature moin moin.',
    price: 4500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/jollof-rice-deluxe-ee10e690-1778155873356.webp',
    category: 'Main',
    points: 50,
    popular: true
  },
  {
    id: '2',
    name: 'Pounded Yam & Egusi',
    description: 'Smooth pounded yam served with rich Egusi soup containing stockfish, smoked fish, and goat meat.',
    price: 6000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/egusi-soup-yam-dcce0a0f-1778155863711.webp',
    category: 'Soup',
    points: 60,
    popular: true
  },
  {
    id: '3',
    name: 'Spicy Suya Platter',
    description: 'Premium beef cuts marinated in traditional yaji spice, grilled to perfection and served with onions.',
    price: 3500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/suya-platter-72e14d59-1778155864028.webp',
    category: 'Main',
    points: 40
  }
];

const Home: React.FC<{ onNavigate: (page: string) => void; onSelectItem: (item: FoodItem) => void }> = ({ onNavigate, onSelectItem }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547928576-a4a33237ce35?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-600/20 backdrop-blur-md text-amber-400 font-bold text-sm mb-6 border border-amber-600/30">
              Serving Eti-Osa's Finest Delicacies
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              A Taste of <span className="text-amber-500 italic">Tradition</span> in Every Bite
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-lg">
              Experience authentic flavors from the heart of Nigeria. Order online for quick pickup or local delivery in Eti-Osa.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => onNavigate('menu')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl h-auto"
              >
                Order Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl h-auto"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-600/20">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Fast Pickup</h3>
              <p className="text-sm text-gray-600">Ready in 20-30 minutes. Skip the queue and enjoy.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-600/20">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Eti-Osa Delivery</h3>
              <p className="text-sm text-gray-600">Hot and fresh delivery within the Eti-Osa axis.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-600/20">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">Pay via Card or Bank Transfer securely.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-600/20">
                <Heart className="text-white w-6 h-6" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Loyalty Points</h3>
              <p className="text-sm text-gray-600">Earn points on every order. Redeem for free meals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-2">Local Favorites</h2>
              <p className="text-gray-600">The dishes our customers love the most.</p>
            </div>
            <Button 
              variant="link" 
              className="text-amber-600 font-bold hover:text-amber-700 hidden sm:flex items-center"
              onClick={() => onNavigate('menu')}
            >
              View Full Menu
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <FoodCard key={item.id} item={item} onSelect={onSelectItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;