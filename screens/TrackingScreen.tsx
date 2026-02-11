
import React from 'react';
import { TrackingStep } from '../types';

const TrackingScreen: React.FC = () => {
  const steps: TrackingStep[] = [
    { label: 'Order Received', status: 'completed', icon: 'receipt_long' },
    { label: 'Preparing Meal', status: 'current', icon: 'restaurant' },
    { label: 'Quality Check', status: 'pending', icon: 'verified' },
    { label: 'Out for Delivery', status: 'pending', icon: 'delivery_dining' },
    { label: 'Delivered', status: 'pending', icon: 'home' }
  ];

  return (
    <div className="px-6 py-4 space-y-8 animate-in slide-in-from-top duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold">Track Order</h2>
        <span className="text-xs font-bold text-slate-400">#KB-8842</span>
      </div>

      {/* Map Placeholder */}
      <div className="relative w-full h-48 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-inner">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-400 text-xs italic">Live delivery tracking unavailable in demo</span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-bounce">
          <span className="material-icons-round text-white text-xs">local_shipping</span>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="space-y-6 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-4">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center gap-6">
            <div className={`absolute -left-[25px] w-4 h-4 rounded-full border-4 border-background-light dark:border-background-dark ${step.status === 'completed' ? 'bg-primary' : step.status === 'current' ? 'bg-orange-300' : 'bg-slate-300'}`}></div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.status === 'completed' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <span className="material-icons-round text-lg">{step.icon}</span>
            </div>
            <div>
              <p className={`text-sm font-bold ${step.status === 'completed' ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>{step.label}</p>
              {step.status === 'current' && <p className="text-[10px] text-primary font-medium">Estimated 15 mins left</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Support Box */}
      <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-6 text-white text-center">
        <p className="text-sm font-bold mb-4">Need help with your order?</p>
        <div className="flex gap-3 justify-center">
          <button className="bg-white/10 px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2"><span className="material-icons-round text-sm">chat</span> WhatsApp</button>
          <button className="bg-primary px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2"><span className="material-icons-round text-sm">call</span> Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default TrackingScreen;
