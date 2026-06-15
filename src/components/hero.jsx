import React from 'react';

function Hero(props) {
  return (
    <main className="flex flex-col items-center justify-center text-center pt-20 px-4">
      <div className="bg-emerald-50/60 p-12 rounded-2xl border border-emerald-100 max-w-2xl shadow-sm">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {props.title}
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          {props.description}
        </p>
        
        <button 
          onClick={props.onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all transform hover:scale-105 shadow-md mb-4"
        >
          {props.buttonText}
        </button>

        <div className="mt-4">
          <span className="bg-white px-4 py-2 rounded-full text-sm font-mono text-gray-600 shadow-sm border border-gray-100">
            Total Klik: <span className="text-blue-600 font-bold">{props.countValue}</span>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Hero;