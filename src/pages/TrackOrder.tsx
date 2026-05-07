import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Utensils, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { Progress } from '../components/ui/progress';

const TrackOrder: React.FC = () => {
  const steps = [
    { label: 'Confirmed', status: 'completed', icon: CheckCircle2, time: '12:45 PM' },
    { label: 'Preparing', status: 'current', icon: Utensils, time: '12:50 PM' },
    { label: 'On the Way', status: 'pending', icon: Truck, time: 'Estim. 1:15 PM' },
    { label: 'Delivered', status: 'pending', icon: Package, time: '--' },
  ];

  return (
    <div className="pt-24 pb-20 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">Track Your Order</h1>
        <p className="text-gray-500">Order ID: #LOD-88291</p>
      </div>

      <div className="bg-white rounded-3xl border border-amber-100 shadow-xl overflow-hidden mb-8">
        <div className="p-8 bg-amber-50 border-b border-amber-100 flex items-center justify-between">
          <div>
            <p className="text-amber-800 font-bold text-sm uppercase tracking-wider mb-1">Estimated Delivery</p>
            <h2 className="text-3xl font-serif font-bold text-amber-900">25 - 35 mins</h2>
          </div>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner">
            <Truck className="w-8 h-8 text-amber-600" />
          </div>
        </div>

        <div className="p-8">
          <div className="relative mb-12">
            <Progress value={45} className="h-2 bg-amber-100" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-0">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-colors ${
                    step.status === 'completed' ? 'bg-amber-600 text-white' : 
                    step.status === 'current' ? 'bg-amber-500 text-white animate-pulse' : 
                    'bg-gray-100 text-gray-400'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="absolute top-12 whitespace-nowrap text-center">
                    <p className={`text-xs font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-amber-900'}`}>{step.label}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-amber-50">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="text-amber-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Delivery Address</p>
                <p className="text-amber-900 font-medium leading-tight">Plot 12, Admiralty Way, Lekki Phase 1, Eti-Osa, Lagos</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="text-amber-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Courier</p>
                <p className="text-amber-900 font-medium leading-tight">Musa - +234 802 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-900 rounded-3xl p-6 text-white flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4">
            <CheckCircle2 className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <p className="font-bold text-lg">Delicious food is coming!</p>
            <p className="text-amber-200/70 text-sm">We'll notify you when it's nearby.</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 transition-colors rounded-xl font-bold text-sm">
          Details
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;