import React from 'react';

const categories = [
  { name: "Sayur Daun", icon: "🥬" },
  { name: "Sayur Buah", icon: "🍅" },
  { name: "Sayur Umbi", icon: "🥕", active: true },
  { name: "Sayur Bunga", icon: "🥦" },
  { name: "Sayur Batang", icon: "🌿" },
];

const CtaCategory = () => {
  return (
    <aside className="w-full lg:w-64 bg-white rounded-2xl shadow-lg p-4 sm:p-5 h-fit order-1 lg:order-none">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Kategori</h2>
      <ul className="space-y-2 sm:space-y-3">
        {categories.map((cat, i) => (
          <li key={i} className={`flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl cursor-pointer transition-all ${cat.active ? 'bg-green-700 text-white shadow-md' : 'text-green-800 hover:bg-green-200'}`}>
            <span className="text-lg sm:text-xl">{cat.icon}</span>
            <span className="text-base sm:text-lg font-medium">{cat.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CtaCategory;
