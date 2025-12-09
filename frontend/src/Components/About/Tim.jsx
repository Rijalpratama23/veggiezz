import React from 'react';
import rijal from '../../assets/rijal.jpg';
import rendi from '../../assets/rendi.jpg';
import mughis from '../../assets/mughis.jpg';
import hazmi from '../../assets/hazmi.jpg';

const Tim = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-0 mx-2 sm:mx-5">
      <div className="w-32 sm:w-40 text-center">
        <img src={mughis} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
        <p className="text-center text-sm sm:text-base mt-2">Mughis Fadhil A.Ridwan</p>
        <p className="text-center color-primary text-xs sm:text-sm">(Project Manager)</p>
      </div>
      <div className="w-32 sm:w-40 text-center">
        <img src={rijal} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
        <p className="text-center text-sm sm:text-base mt-2">Rijal Pratama</p>
        <p className="text-center color-primary text-xs sm:text-sm">(System Developer)</p>
      </div>
      <div className="w-32 sm:w-40 text-center">
        <img src={hazmi} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
        <p className="text-center text-sm sm:text-base mt-2">Muhammad Hazmi ZK</p>
        <p className="text-center color-primary text-xs sm:text-sm">(Graphic Designer)</p>
      </div>
      <div className="w-32 sm:w-40 text-center">
        <img src={rendi} alt="picture" className="rounded-full hover:cursor-pointer w-24 sm:w-32 mx-auto" />
        <p className="text-center text-sm sm:text-base mt-2">Rendi Ruswandi</p>
        <p className="text-center color-primary text-xs sm:text-sm">(System Analytics)</p>
      </div>
    </div>
  );
};

export default Tim;
