import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonHome = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() =>  navigate("/product")} className="bg-green-700 font-primary mt-3 text-xl md:text-3xl color-primary text-white rounded-md px-6 py-3 font-semibold">
      <a href="">Belanja Sekarang</a>
    </button>
  );
};

export default ButtonHome;
