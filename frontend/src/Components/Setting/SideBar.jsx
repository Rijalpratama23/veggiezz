import React from 'react';
import TrashRead from './TrashRed';
// import { Trash } from 'lucide-react'; // (Opsional: Hapus jika tidak dipakai, tapi saya biarkan kalau kamu mau pakai)

const SideBar = ({ dataMenu }) => {
  return (
    <div className=" bg-new rounded-2xl w-100">
      <div className="p-5 flex justify-center item-center">
        <div className="">
          
          {/* --- MULAI LOGIKA LOOPING (Style Button Kamu Tetap Sama) --- */}
          {dataMenu.map((item, index) => (
            <button 
              key={index} 
              className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer hover:bg-green-800 hover:text-white"
            >
              {item.icon}
              <h3 className="font-actor font-semibold text-xl">{item.judul}</h3>
            </button>
          ))}
          {/* --- AKHIR LOGIKA LOOPING --- */}

          <TrashRead RedTrash="red" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;