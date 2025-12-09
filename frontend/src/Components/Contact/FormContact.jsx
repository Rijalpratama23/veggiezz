import React from 'react';
import { useNavigate } from 'react-router-dom'
import BtnContact from './btnContact';

const FormContact = () => {
  return (
    <form action="" className="my-5 w-full lg:w-1/2">
      <h1 className="font-acme text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-7 text-center lg:text-left">Kontak Kami</h1>

      <div className="nama border rounded-2xl mb-4 sm:mb-5 w-full">
        <input type="text" placeholder="Nama" className="outline-none m-3 w-full text-base sm:text-lg" />
      </div>
      <div className="addrees border rounded-2xl mb-4 sm:mb-5">
        <input type="text" placeholder="Alamat Email" className="outline-none m-3 w-full text-base sm:text-lg" />
      </div>
      <div className="subjek border rounded-2xl mb-4 sm:mb-5">
        <input type="text" placeholder="Subjek" className="outline-none m-3 w-full text-base sm:text-lg" />
      </div>
      <div className="border rounded-2xl mb-4 sm:mb-5">
        <textarea name="pesan" id="pesan" placeholder="Masukkan pesan anda" className="outline-none m-3 w-full h-24 sm:h-32 text-base sm:text-lg resize-none"></textarea>
      </div>

      <div className="btn primary rounded-2xl flex justify-center mb-5">
        <BtnContact />
      </div>    
    </form>
  );
};

export default FormContact;
