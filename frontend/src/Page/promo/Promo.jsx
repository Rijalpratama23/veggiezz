import React from 'react';
import BannerPromo from '../../Components/Promo/BannerPromo';
import ContainerProduct from '../../Components/Promo/ContainerProduct';
import Header from '../../Components/Header';


const Promo = () => {
  return (
    <div className="min-h-screen w-full secondary">
      <Header />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="poster p-4 md:p-10 lg:p-20">
          <BannerPromo />

          {/* Produk Promo */}
          <ContainerProduct />

        </div>
      </div>
    </div>
  );
};

export default Promo;
