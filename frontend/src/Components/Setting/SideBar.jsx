import React from 'react';

const SideBar = ({ dataMenu }) => {
  return (
    <div className="bg-new rounded-2xl w-100">
      <div className="p-5 flex justify-center item-center">
        <div className="">
          {/* --- MULAI LOGIKA LOOPING --- */}
          {dataMenu.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              // LOGIKA STYLE:
              // 1. Base style (ukuran, flex, dll)
              // 2. Cek apakah isDelete? (Tombol Hapus/Keluar punya style sendiri)
              // 3. Jika bukan isDelete, Cek isActive? (Jika aktif hijau, jika tidak putih)
              className={`flex w-70 h-15 items-center gap-3 p-2 rounded-2xl justify-center mt-5 hover:cursor-pointer transition-all 
                ${
                  item.isDelete
                    ? 'bg-white text-red-600 hover:bg-red-600 hover:text-white' // Style Tombol Merah
                    : item.isActive
                    ? 'bg-green-800 text-white shadow-md' // Style AKTIF (Hijau Permanen)
                    : 'bg-white text-gray-800 hover:bg-green-800 hover:text-white' // Style Default (Putih)
                }
              `}
            >
              {/* Render Icon */}
              <div className={item.isActive && !item.isDelete ? 'text-white' : ''}>{item.icon}</div>

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
