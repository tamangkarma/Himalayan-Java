// src/components/HimalayanJavaBanner.jsx
import React, { useEffect, useState } from 'react';

const HimalayanJavaBanner = () => {
  const [beans, setBeans] = useState([]);
  
  // Initialize coffee beans
  useEffect(() => {
    const initialBeans = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.5 + Math.random(),
      rotation: Math.random() * 360,
      animationDelay: Math.random() * 2,
      animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse',
      color: i % 4 === 0 ? 'bg-amber-900' : 
             i % 4 === 1 ? 'bg-amber-800' : 
             i % 4 === 2 ? 'bg-amber-700' : 'bg-amber-600'
    }));
    setBeans(initialBeans);
  }, []);

  return (
    <div className="relative w-full max-w-3xl h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* Floating coffee beans */}
      {beans.map(bean => (
        <div
          key={bean.id}
          className={`absolute rounded-full opacity-30 ${bean.color} animate-float`}
          style={{
            left: `${bean.left}%`,
            top: `${bean.top}%`,
            width: '30px',
            height: '15px',
            animationDelay: `${bean.animationDelay}s`,
            animationDirection: bean.animationDirection,
            transform: `scale(${bean.size}) rotate(${bean.rotation}deg)`
          }}
        />
      ))}
      
      {/* Floating mountains */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`mountain-${i}`}
          className="absolute bg-gradient-to-br from-blue-700 to-blue-800 opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '40px',
            height: '40px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: `rotate(180deg) scale(${0.3 + Math.random() * 0.7})`,
            animationDelay: `${Math.random() * 2}s`,
            animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
      
      {/* Decorative corner elements */}
      <div className="absolute top-8 right-8 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={`top-${i}`} 
            className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" 
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-8 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={`bottom-${i}`} 
            className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" 
            style={{ animationDelay: `${i * 0.5 + 0.3}s` }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-100"></div>
            </div>
            <div className="ml-3 text-center">
              <h1 className="text-3xl font-bold text-white">
                <span className="text-amber-300">Himalayan</span> Java
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 mt-1 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Main text */}
        <h2 className="text-2xl md:text-3xl font-medium text-white text-center mb-10 max-w-md">
          Himalayan Java is available for Android and iOS
        </h2>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <button className="flex items-center bg-gradient-to-br from-green-500 to-green-600 px-6 py-4 rounded-2xl text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="mr-3 text-2xl">📱</div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider">Get it on</div>
              <div className="text-xl">Play Store</div>
            </div>
          </button>
          
          <button className="flex items-center bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-4 rounded-2xl text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="mr-3 text-2xl">🍎</div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider">Download on the</div>
              <div className="text-xl">App Store</div>
            </div>
          </button>
        </div>
        
        {/* Platform icons */}
        <div className="mt-10 flex gap-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center shadow-lg">
            <div className="text-3xl">🤖</div>
          </div>
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
            <div className="text-3xl">🍏</div>
          </div>
        </div>
      </div>
      
      {/* Animated divider */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
    </div>
  );
};

export default HimalayanJavaBanner;