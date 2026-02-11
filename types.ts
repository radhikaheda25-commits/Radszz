
export interface FoodItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  rating: number;
  time: string;
  category: string;
  isOffer?: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export enum AppScreen {
  HOME = 'home',
  MENU = 'menu',
  CART = 'cart',
  TRACKING = 'tracking',
  PROFILE = 'profile'
}

export interface TrackingStep {
  label: string;
  status: 'completed' | 'current' | 'pending';
  icon: string;
}
