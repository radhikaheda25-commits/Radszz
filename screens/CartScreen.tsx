
import React, { useEffect, useState } from 'react';
import { CartItem, FoodItem } from '../types';
import { getFoodRecommendations } from '../services/gemini';
import { FOOD_ITEMS } from '../constants';

interface CartScreenProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onPlaceOrder: () => void;
  onAddFromRecommendation: (item: FoodItem) => void;
}

const CartScreen: React.FC<CartScreenProps> = ({ cart, onUpdateQuantity, onPlaceOrder, onAddFromRecommendation }) => {
  const [recommendation, setRecommendation] = useState<{item: FoodItem | null, reason: string}>({item: null, reason: ''});
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setLoadingAi(true);
      getFoodRecommendations(cart.map(i => i.name), FOOD_ITEMS)
        .then(res => {
          const parsed = JSON.parse(res);
          const found = FOOD_ITEMS.find(i => i.name === parsed.recommendedItem);
          setRecommendation({ item: found || null, reason: parsed.reason });
        })
        .finally(() => setLoadingAi(false));
    }
  }, [cart.length === 1]); // Refresh recommendation if cart starts with 1 item

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalTotal = cart.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0);
  const totalSavings = originalTotal - subtotal;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
          <span className="material-icons-round text-5xl">shopping_cart</span>
        </div>
        <h2 className="text-xl font-extrabold mb-2">Your cart is empty</h2>
        <p className="text-sm text-slate-500">Looks like you haven't added any gourmet items yet.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-4 space-y-6 animate-in slide-in-from-bottom duration-500 pb-40">
      <h2 className="text-2xl font-extrabold">My Order</h2>

      {/* Savings Summary Box */}
      {totalSavings > 0 && (
        <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl relative overflow-hidden">
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-icons-round text-white">savings</span>
            </div>
            <div>
              <p className="text-xs font-medium text-primary/80">Great job!</p>
              <h2 className="text-xl font-extrabold text-primary">Saving ${totalSavings.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      )}

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">{item.name}</h4>
              <p className="text-[10px] text-slate-500">{item.brand}</p>
              <div className="flex items-center gap-3 mt-1">
                <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-primary"><span className="material-icons-round text-sm">remove</span></button>
                <span className="text-xs font-bold">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-primary"><span className="material-icons-round text-sm">add</span></button>
              </div>
            </div>
            <div className="text-right">
              {item.originalPrice && <p className="text-[10px] text-slate-400 line-through">${(item.originalPrice * item.quantity).toFixed(2)}</p>}
              <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      {recommendation.item && (
        <div className="bg-slate-900 dark:bg-primary/20 text-white rounded-2xl p-4 flex items-center justify-between shadow-xl mt-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <span className="material-icons-round text-white text-sm">auto_awesome</span>
            </div>
            <div>
              <p className="text-[9px] uppercase font-black text-primary tracking-widest">Smart Choice</p>
              <p className="text-xs font-bold">{recommendation.item.name}</p>
              <p className="text-[9px] text-slate-400">{recommendation.reason}</p>
            </div>
          </div>
          <button 
            onClick={() => recommendation.item && onAddFromRecommendation(recommendation.item)}
            className="bg-white dark:bg-primary text-slate-900 dark:text-white px-4 py-2 rounded-full text-[10px] font-extrabold shadow-sm active:scale-95 transition-transform"
          >
            Add +
          </button>
        </div>
      )}

      {/* Totals */}
      <div className="space-y-3 pt-6 border-t border-dashed border-slate-200 dark:border-slate-700">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Subtotal</span>
          <span className="font-medium text-slate-900 dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-primary font-bold">
          <span>Total Discount</span>
          <span>-${totalSavings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Estimated Tax</span>
          <span className="font-medium text-slate-900 dark:text-white">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Fixed Checkout Footer */}
      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-6 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 z-40">
        <div className="flex-1">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Final Amount</p>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white">${total.toFixed(2)}</p>
        </div>
        <button 
          onClick={onPlaceOrder}
          className="flex-[2] bg-primary hover:bg-primary/90 text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/40 active:scale-95 transition-transform"
        >
          <span>Place Order</span>
          <span className="material-icons-round text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
