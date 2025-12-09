import React from 'react';

const TrashRead = () => {
  return (
    <button className="flex w-70 h-15 items-center gap-3 bg-white p-2 rounded-2xl justify-center my-5 hover:cursor-pointer hover:bg-green-800 hover:text-white">
      <i className="fa-solid fa-trash text-3xl text-red-500" ></i>
      <h3 className="font-actor font-semibold text-xl">Hapus Akun</h3>
    </button>
  );
};

export default TrashRead;
