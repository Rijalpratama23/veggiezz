import React from 'react';
import promoImg from '../../assets/promoImg.jpg';

const BannerPromo = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src={promoImg} alt="Promo" className="w-full h-[180px] sm:h-[250px] md:h-[350px] object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-promo font-extrabold tracking-wider">GRAB YOUR</h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-promo font-extrabold mt-2">FRESH DEALS</h2>
      </div>
    </div>
  );
};

export default BannerPromo;
