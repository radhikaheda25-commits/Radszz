
import React from 'react';
import { FOOD_ITEMS, BRANDS } from '../constants';
import { FoodItem } from '../types';

interface HomeScreenProps {
  onAddToCart: (item: FoodItem) => void;
  onExploreMenu: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onAddToCart, onExploreMenu }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="px-6 pt-4">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">
              Premium Delivery
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              The Future <br />
              <span className="text-primary italic">of Food</span> <br />
              Delivery.
            </h1>
            
            {/* Location Input */}
            <div className="relative max-w-sm group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons-round text-slate-400 group-focus-within:text-primary text-sm">location_on</span>
              </div>
              <input 
                className="w-full bg-white dark:bg-slate-800 border-none rounded-full py-4 pl-12 pr-12 text-xs shadow-xl shadow-primary/5 focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                placeholder="Enter delivery address..." 
                type="text"
              />
              <button className="absolute inset-y-2 right-2 px-3 bg-primary text-white rounded-full flex items-center">
                <span className="material-icons-round text-sm">my_location</span>
              </button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative h-64 w-full flex items-center justify-center">
            <div className="absolute w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            {/* Secondary Dish Left */}
            <div className="absolute z-10 -bottom-2 left-0 transform -rotate-12 transition-transform duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPKO-o86jycGEcrk2139pFWYFy6-npB4swjGQ_qx9J6jhNUtzQYgieJlEkMPW82qBdai5cEoD9hJ_v2WldCyjBCPqAJEBZVURgTMu8KTyY7btC1dt3L315cCkUsqRAZJ1nhKmIcZynwoQVBP5agLtHrDjD1qd9GGyNLnnDggQdx5gngs_gcxa7CRlpfRQsXL-CDXtYHgii-f1tdLOcB2H7qTJoo8-YK9Rvi4wCjUwsMD6C7sEM5i4xBVmcidgdDb-tldVcBOIwbdI"
                className="w-32 h-32 object-cover rounded-2xl shadow-2xl border-2 border-white dark:border-slate-700"
                alt="Pizza"
              />
            </div>
            {/* Main Dish Center */}
            <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu03H6Ibd-pIWlGQeHh4RhWRsKd_61tANdJaFHcVo3nsV1audyEm2PK4L_YuE6OM-_SBI5OTBCOSWVRst_T7MMZlegx262ObOWLzB7FwPHQOqNx_RVUPbUrMMFHUcQ-dgXhCPu591ULwVzgv359ZPx2NzPNE4qxmHXyIyahHwyCN5VReQtIpkI5mKfqimgVg-c0OwnmH77Ah5SrQ3I1Wq86VbqwgoECTXByxbuioJK5xn6BKrJyN7FQx02u24TRpDu5NwJ5A3g2Oo"
                className="w-44 h-44 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700"
                alt="Sushi"
              />
            </div>
            {/* Tertiary Dish Right */}
            <div className="absolute z-10 top-0 right-0 transform rotate-12 transition-transform duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi0R4c_FnwnTXpW7zBQYKG6ZH2oNzM1EkbhvelP3uO1mBhVVDS6cdw6X6faNgQOqRKq3dCFtKTUJZVI1efFp4dNVYY-o_eL823C-cR0m8zZPLmvPM2ZMl2Qs-S5erSJf1jPC1hc3mloutyL5MsCpYX8Atiu8EVkUOufHGnSfBLgc0pwOuIZEtdmAiICUqBDsVOeAO9Ebtwrn5ZcF4LIEpU-YsPB7UrkHYakaIm7kD61as0_nkCZLkPJRDDigtCXKaTA2WVNqfajFM"
                className="w-32 h-32 object-cover rounded-2xl shadow-2xl border-2 border-white dark:border-slate-700"
                alt="Salad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Filter */}
      <section>
        <div className="flex space-x-3 px-6 overflow-x-auto no-scrollbar pb-2">
          {BRANDS.map((brand, idx) => (
            <button 
              key={brand}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap text-xs transition-colors ${idx === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section>
        <div className="flex items-center justify-between px-6 mb-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Trending Now</h2>
          <button onClick={onExploreMenu} className="text-primary text-xs font-bold flex items-center">
            View All <span className="material-icons-round text-sm">chevron_right</span>
          </button>
        </div>
        <div className="flex space-x-4 px-6 overflow-x-auto no-scrollbar pb-4">
          {FOOD_ITEMS.map((item) => (
            <div key={item.id} className="min-w-[260px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center">
                  <span className="material-icons-round text-yellow-400 text-xs mr-1">star</span> {item.rating}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{item.brand}</p>
                    <h3 className="font-bold text-sm line-clamp-1">{item.name}</h3>
                  </div>
                  <p className="font-extrabold text-primary text-sm">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center text-slate-400 text-[10px] mb-4">
                  <span className="material-icons-round text-xs mr-1">schedule</span> {item.time}
                </div>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white py-2 rounded-full font-bold text-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="px-6 pb-6">
        <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold mb-2 text-slate-900 dark:text-white leading-tight">Safety & Hygiene</h2>
            <p className="text-xs text-slate-500">Your health is our top priority in every meal.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-icons-round text-primary">touch_app</span>
              </div>
              <h4 className="text-[9px] font-extrabold uppercase text-slate-400">Contactless</h4>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-icons-round text-primary">thermostat</span>
              </div>
              <h4 className="text-[9px] font-extrabold uppercase text-slate-400">Temp Checks</h4>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-icons-round text-primary">clean_hands</span>
              </div>
              <h4 className="text-[9px] font-extrabold uppercase text-slate-400">Sanitized</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
