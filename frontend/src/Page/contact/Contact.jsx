import React from 'react';
import Header from '../../Components/Header';
import FormContact from '../../Components/Contact/formContact';
import Img from '../../Components/Contact/Img';

const Contact = () => {
  return (
    <div className="min-h-screen secondary">
      <Header />
      <div className='flex justify-center mt-25 px-4 sm:px-6 md:px-10'>
        <div className="container flex flex-col lg:flex-row justify-between content-center rounded-2xl poster w-full max-w-6xl">
          <div className="md:w-full flex flex-col lg:flex-row justify-between bg-white p-6 sm:p-8 md:p-10 rounded-2xl m-3 sm:m-5 shadow-xl/30">
            
            <FormContact />
            <Img />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
