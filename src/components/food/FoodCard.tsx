import React from 'react';
import { FoodItem } from '../../types';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Star, Plus } from 'lucide-react';
import { Badge } from '../ui/badge';

interface FoodCardProps {
  item: FoodItem;
  onSelect: (item: FoodItem) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect }) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-amber-100 bg-white">
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onSelect(item)}
      >
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.popular && (
          <Badge className="absolute top-3 left-3 bg-amber-500 text-white border-none">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Popular
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
          <span className="text-amber-900 font-bold text-sm">+{item.points} pts</span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-lg text-amber-900 line-clamp-1">{item.name}</h3>
          <span className="font-bold text-amber-700">₦{item.price.toLocaleString()}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 h-10">{item.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
          onClick={() => onSelect(item)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;