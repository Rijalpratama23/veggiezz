import React from 'react';

const Button = ({onClick, title, type = "button"}) => {
  return (
    <div className="flex justify-center">
      <button onClick={onClick} type={type} className='w-65 primary bg-gradient-to-r from-[#3A803E] to-[#D1DBD1] py-2 rounded-xl font-semibold transition-all hover:bg-green-500 text-white hover:text-gray-100 font-primary text-xl'>
      {title}
      </button>
    </div>
  );
};

export default Button;
