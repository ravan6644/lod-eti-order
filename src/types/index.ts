export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Main' | 'Sides' | 'Soup' | 'Drinks' | 'Snacks';
  points: number;
  popular?: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
  customization?: string;
}

export interface OrderStatus {
  id: string;
  status: 'confirmed' | 'preparing' | 'ready' | 'delivered';
  timestamp: string;
  estimatedTime: number;
}

export interface LoyaltyMember {
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  history: { date: string; points: number; action: string }[];
}