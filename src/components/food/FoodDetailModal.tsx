import React, { useState } from 'react';
import { FoodItem } from '../../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface FoodDetailModalProps {
  item: FoodItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const FoodDetailModal: React.FC<FoodDetailModalProps> = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState('');
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity, customization);
    setQuantity(1);
    setCustomization('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-amber-100">
        <div className="h-64 relative">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <DialogTitle className="text-2xl font-serif font-bold mb-1">{item.name}</DialogTitle>
            <p className="text-amber-100 font-medium">₦{item.price.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Description</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-amber-900 mb-2">Special Instructions</h4>
            <Textarea 
              placeholder="e.g. Extra spicy, no onions, etc."
              className="resize-none border-amber-200 focus:border-amber-500"
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center bg-amber-50 rounded-lg p-1 border border-amber-200">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-amber-700 hover:bg-amber-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-bold text-amber-900">{quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-amber-700 hover:bg-amber-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Total</p>
              <p className="text-xl font-bold text-amber-900">₦{(item.price * quantity).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 pt-0">
          <Button 
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg"
            onClick={handleAdd}
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add to Bag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FoodDetailModal;