import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Trash2, Plus, Minus, CreditCard, Landmark, ShoppingBag, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

const Cart: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 1500;
  const grandTotal = totalPrice + deliveryFee;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Order placed successfully!');
      clearCart();
      onNavigate('tracking');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-12 h-12 text-amber-200" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-xs">Looks like you haven't added any of our delicious meals yet.</p>
        <Button 
          onClick={() => onNavigate('menu')}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 h-12 rounded-xl"
        >
          Explore Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-amber-900 mb-8">Review Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <Card key={item.id + (item.customization || '')} className="border-amber-100 overflow-hidden">
              <CardContent className="p-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-amber-900">{item.name}</h3>
                    <p className="font-bold text-amber-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  {item.customization && (
                    <p className="text-xs text-amber-600 mt-1 italic">"{item.customization}"</p>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7 border-amber-200"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center font-medium">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7 border-amber-200"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
            <h3 className="font-bold text-amber-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-amber-600" />
              Delivery Address
            </h3>
            <div className="space-y-4">
              <Input placeholder="Enter your delivery address in Eti-Osa" className="border-amber-200" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Flat / House No" className="border-amber-200" />
                <Input placeholder="Landmark" className="border-amber-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-amber-100 bg-amber-50/50">
            <CardContent className="p-6">
              <h3 className="font-bold text-amber-900 mb-6">Payment Method</h3>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-amber-100">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer">
                      <CreditCard className="w-4 h-4 mr-2 text-amber-600" />
                      Debit/Credit Card
                    </Label>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-amber-100">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="flex items-center cursor-pointer">
                      <Landmark className="w-4 h-4 mr-2 text-amber-600" />
                      Bank Transfer
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-amber-200 flex justify-between font-bold text-amber-900 text-lg">
                  <span>Total</span>
                  <span>₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-amber-100 rounded-lg flex items-start">
                <Star className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">You will earn <span className="font-bold">150 points</span> with this purchase!</p>
              </div>

              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-8 py-6 rounded-xl text-lg shadow-lg shadow-amber-600/20"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order • ₦${grandTotal.toLocaleString()}`}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;