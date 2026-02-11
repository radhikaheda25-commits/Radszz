
import React from 'react';
import { AppScreen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  onScreenChange: (screen: AppScreen) => void;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onScreenChange, cartCount }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark relative flex flex-col pb-24 shadow-2xl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2" onClick={() => onScreenChange(AppScreen.HOME)}>
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-icons-round text-white text-xl">cloud</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
            KITCHEN<span className="text-primary">X</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onScreenChange(AppScreen.MENU)}
            className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary"
          >
            <span className="material-icons-round">search</span>
          </button>
          <div className="relative" onClick={() => onScreenChange(AppScreen.CART)}>
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-icons-round">shopping_bag</span>
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-primary">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
        <button 
          onClick={() => onScreenChange(AppScreen.HOME)}
          className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.HOME ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className="material-icons-round">home</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Home</span>
        </button>
        <button 
          onClick={() => onScreenChange(AppScreen.MENU)}
          className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.MENU ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className="material-icons-round">restaurant_menu</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Menu</span>
        </button>
        <button 
          onClick={() => onScreenChange(AppScreen.TRACKING)}
          className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.TRACKING ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className="material-icons-round">history</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Orders</span>
        </button>
        <button 
          onClick={() => onScreenChange(AppScreen.PROFILE)}
          className={`flex flex-col items-center gap-1 ${activeScreen === AppScreen.PROFILE ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className="material-icons-round">person</span>
          <span className="text-[10px] font-bold uppercase tracking-tight">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
