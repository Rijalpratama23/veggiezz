import React from 'react';
import Header from '../../Components/Header';
import CardKeranjang from '../../Components/Keranjang/CardKeranjang';
import wortel from '../../assets/wortel.png';
import sawiImg from '../../assets/sawiImg.png';
import tomat from '../../assets/tomat.png';
import Ringkasan from '../../Components/Keranjang/Ringkasan';

const Keranjang = () => {
  // kode handle klik/props dll disini.

  return (
    <div className="overflow-hidden min-h-screen poster">
      <Header />
      <div className="bluelight p-6 sm:p-8 md:p-10 m-4 sm:m-6 md:m-25 rounded-2xl">
        <h2 className="font-primary text-2xl sm:text-3xl mb-6 sm:mb-8 md:px-16">Keranjang Pesanan</h2>

        <div
          className="
      content 
      flex 
      flex-col 
      lg:flex-row
      justify-between
      gap-6
      px-4
      sm:px-8
      lg:px-10
    "
        >
          <div className="containerContent w-full">
            <div className="mt-5 px-4 sm:px-5 py-3 h-60 sm:h-72 md:h-96 overflow-y-auto w-full">
              <CardKeranjang image={wortel} name="Wortel Segar" price="12.000/kg" />
              <CardKeranjang image={sawiImg} name="Sawi Hijau" price="29.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
              <CardKeranjang image={tomat} name="Tomato" price="10.000/kg" />
            </div>
          </div>

          <div className="w-full lg:max-w-xs mx-auto lg:mx-0">
            <Ringkasan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
