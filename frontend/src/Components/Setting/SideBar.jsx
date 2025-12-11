import React from 'react';

const SideBar = ({ dataMenu }) => {
  return (
    <div className=" bg-new rounded-2xl w-100">
      <div className="p-5 flex justify-center item-center">
        <div className="">
          {/* --- MULAI LOGIKA LOOPING --- */}
          {dataMenu.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:text-white transition-all 
                ${item.isDelete ? 'hover:bg-red-600 text-red-600' : 'hover:bg-green-800 text-gray-800'}`}
            >
              {/* Render Icon */}
              {item.icon}

              {/* Render Judul */}
              <h3 className="font-actor font-semibold text-xl">{item.judul}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
