
import React from 'react';
import { FOOD_ITEMS } from '../constants';
import { FoodItem } from '../types';

interface MenuScreenProps {
  onAddToCart: (item: FoodItem) => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onAddToCart }) => {
  const categories = ['All', 'American', 'Japanese', 'Asian', 'Healthy', 'Italian'];
  const [activeCat, setActiveCat] = React.useState('All');

  const filteredItems = activeCat === 'All' 
    ? FOOD_ITEMS 
    : FOOD_ITEMS.filter(item => item.category === activeCat);

  return (
    <div className="px-6 py-4 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold">Full Menu</h2>
        <button className="text-primary"><span className="material-icons-round">filter_list</span></button>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCat === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Item List */}
      <div className="space-y-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-800 rounded-2xl p-3 flex gap-4 shadow-sm">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="font-bold text-sm">{item.name}</h3>
                <p className="text-[10px] text-slate-400 line-clamp-2 mt-1">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-sm">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-primary text-white p-1 rounded-full leading-none"
                >
                  <span className="material-icons-round text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;
