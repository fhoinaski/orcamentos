import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative flex flex-col items-center">
        {/* Animação da chave */}
        <div className="relative w-24 h-24">
          {/* Parafuso */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
          </div>
          {/* Chave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-12 h-2 bg-primary rounded rotate-0 origin-bottom animate-tighten"
              style={{ transformOrigin: 'bottom center' }}
            ></div>
          </div>
        </div>
        {/* Texto de Carregamento */}
        <p className="mt-8 text-xl font-semibold text-primary tracking-widest">
          Carregando...
        </p>
      </div>
    </div>
  );
};

export default Loading;
