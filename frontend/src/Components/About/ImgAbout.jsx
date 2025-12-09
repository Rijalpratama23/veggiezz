import React from 'react';
import imageAbout from '../../assets/imageAbout.png';

const ImgAbout = () => {
  return (
    <div className="h-auto pt-5 md:pt-20 md:h-58 w-full md:w-auto flex justify-center items-center">
      <img src={imageAbout} alt="picture" className="w-64 sm:w-80 md:w-313 pb-5 md:pb-20" />
    </div>
  );
};

export default ImgAbout;
