import React, { useState } from 'react';
import { FoodItem } from '../types';
import FoodCard from '../components/food/FoodCard';
import { Input } from '../components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const menuItems: FoodItem[] = [
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
  },
  {
    id: '4',
    name: 'Catfish Pepper Soup',
    description: 'Spicy and aromatic catfish soup with traditional herbs and scent leaves.',
    price: 5500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/pepper-soup-fe3e3a22-1778155863305.webp',
    category: 'Soup',
    points: 55
  },
  {
    id: '5',
    name: 'Gourmet Meat Pie',
    description: 'Rich, flaky pastry filled with savory minced meat, carrots, and potatoes.',
    price: 1200,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/nigerian-snacks-platter-5c56e472-1778155864158.webp',
    category: 'Snacks',
    points: 10
  },
  {
    id: '6',
    name: 'Classic Chapman',
    description: 'The iconic Nigerian mocktail made with fanta, sprite, zobo concentrate, bitters, and fresh cucumber.',
    price: 2500,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0817f617-b64b-4b0c-8f16-a9962599305d/chapman-drink-90a12bd2-1778155864160.webp',
    category: 'Drinks',
    points: 20
  }
];

const categories = ['All', 'Main', 'Soup', 'Snacks', 'Drinks'];

const Menu: React.FC<{ onSelectItem: (item: FoodItem) => void }> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Digital Menu</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          From hearty soups to party-ready rice, discover the best of Eti-Osa's culinary scene. 
          Every meal is prepared fresh on order.
        </p>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search for dishes..." 
              className="pl-10 h-12 border-amber-200 focus:ring-amber-500 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <Badge 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 cursor-pointer rounded-lg text-sm transition-all border-none ${
                  activeCategory === cat 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-amber-50'
                }`}
              >
                {cat}
              </Badge>
            ))}
            <button className="p-2 bg-white rounded-lg border border-amber-100 text-gray-500">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} onSelect={onSelectItem} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 text-lg">No dishes found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;