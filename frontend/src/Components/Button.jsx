import React from 'react';

const Button = ({onClick, title}) => {

  return (
    <div className="flex justify-center">
      <button onClick={onClick} type="submit" className=" w-65 primary bg-gradient-to-r from-[#3A803E] to-[#D1DBD1] py-2 rounded-xl font-semibold transition-all hover:bg-green-500">
        <a href="" className="font-primary text-xl text-white hover:text-gray-600">
          {title}
        </a>
      </button>
    </div>
  );
};

export default Button;
