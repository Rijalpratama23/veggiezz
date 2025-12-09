import React from 'react';
import imgHome from '../../assets/imgHome.png';
import ButtonHome from '../../Components/Home/ButtonHome';
import Tagline from '../../Components/Home/Taagline';

const ContentHome = () => {
  return (  
    <section className="mt-12 py-12">
      <div className="max-w-7xl mx-auto shadow-2xl poster rounded-xl  px-25 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* tagline */}
        <Tagline />
        {/* Placeholder Hero Image */}
        <img src={imgHome} alt="picture" className="w-auto h-90" />
      </div>
    </section>
  );
};

export default ContentHome;
