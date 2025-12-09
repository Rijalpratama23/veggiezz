import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonHome from './ButtonHome';

const Tagline = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-xl text-shadow-sm md:text-shadow-sm font-kavoon md:text-4xl font-bold color-primary mb-3">Selamat Datang !!</h1>
      <h1 className="w-full md:w-208 text-xl md:text-4xl font-kavoon font-semibold color-primary mb-6 text-shadow-sm md:text-shadow-sm">Ciptakan pasar hijau digitalmu dengan VeggieZ</h1>
      <ButtonHome />
    </div>
  );
};

export default Tagline;
