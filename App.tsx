
import React, { useState, useEffect } from 'react';
import { AppScreen, FoodItem, CartItem } from './types';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import TrackingScreen from './screens/TrackingScreen';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutFinished, setIsCheckoutFinished] = useState(false);

  const handleAddToCart = (item: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    setActiveScreen(AppScreen.TRACKING);
    setCart([]);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case AppScreen.HOME:
        return <HomeScreen onAddToCart={handleAddToCart} onExploreMenu={() => setActiveScreen(AppScreen.MENU)} />;
      case AppScreen.MENU:
        return <MenuScreen onAddToCart={handleAddToCart} />;
      case AppScreen.CART:
        return (
          <CartScreen 
            cart={cart} 
            onUpdateQuantity={handleUpdateQuantity} 
            onPlaceOrder={handlePlaceOrder}
            onAddFromRecommendation={handleAddToCart}
          />
        );
      case AppScreen.TRACKING:
        return <TrackingScreen />;
      case AppScreen.PROFILE:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden mb-6">
              <img src="https://picsum.photos/seed/user/200/200" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-extrabold mb-2">Alex Johnson</h2>
            <p className="text-xs text-slate-500 mb-8">Premium Gold Member (250 pts)</p>
            <div className="w-full space-y-3">
              <button className="w-full bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between text-sm font-bold">
                My Addresses <span className="material-icons-round text-slate-400">chevron_right</span>
              </button>
              <button className="w-full bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between text-sm font-bold">
                Payment Methods <span className="material-icons-round text-slate-400">chevron_right</span>
              </button>
              <button className="w-full bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex items-center justify-between text-sm font-bold">
                Order History <span className="material-icons-round text-slate-400">chevron_right</span>
              </button>
            </div>
          </div>
        );
      default:
        return <HomeScreen onAddToCart={handleAddToCart} onExploreMenu={() => setActiveScreen(AppScreen.MENU)} />;
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Layout activeScreen={activeScreen} onScreenChange={setActiveScreen} cartCount={cartCount}>
      {renderScreen()}
    </Layout>
  );
};

export default App;
