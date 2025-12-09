import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoHome from "../assets/LogoHome.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Fungsi untuk menuju halaman profile saat icon user di klik
  const handleProfileClick = () => {
    navigate("/profile");
  };

  // fungsi untuk halaman keranjang
  const handleKeranjangCLick = () => {
    navigate("/keranjang");
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 secondary">
      <div className="bg-white my-5 max-w-7xl mx-auto rounded-xl shadow-xl flex items-center justify-between md:px-6 py-3">
        
        {/* ✅ Logo */}
        <div className="logo">
          <Link to="/">
            <img src={LogoHome} alt="Logo Home" className="w-35 md:w-36" />
          </Link>
        </div>

        {/* ✅ Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-lg font-medium text-gray-700 transition-all duration-300">
            {[
              { name: "Home", path: "/home" },
              { name: "Promo", path: "/promo" },
              { name: "Product", path: "/product" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`relative font-semibold transition-all duration-300
                    ${
                      location.pathname === item.path
                        ? "text-green-700 after:w-full"
                        : "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Search + Icons Desktop */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
          <div className="flex items-center">
            <i className="fa-solid fa-gear color-primary"></i>
            <input
              type="text"
              placeholder="Cari Produk"
              className="border px-4 py-1 ml-5 rounded-full text-sm mr-2"
            />
            <i className="fa-solid fa-magnifying-glass cursor-pointer color-primary"></i>
          </div>

          {/* 🔹 Icon User (Menuju Profile) */}
          <i
            className="fa-solid fa-user cursor-pointer color-primary hover:text-green-700 transition"
            onClick={handleProfileClick}
          ></i>

          <i className="fa-solid fa-cart-shopping cursor-pointer color-primary hover:text-green-700 transition" onClick={handleKeranjangCLick}></i>
        </div>

        {/* ✅ Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-lg font-medium">
            {[
              { name: "Home", path: "/home" },
              { name: "Promo", path: "/promo" },
              { name: "Product", path: "/product" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-green-700 font-semibold"
                      : "hover:text-green-700"
                  } transition`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* 🔹 Icon di Mobile */}
            <div className="flex gap-4 text-xl pt-2">
              <i
                className="fa-solid fa-user cursor-pointer hover:text-green-700 transition"
                onClick={() => {
                  handleProfileClick();
                  setMenuOpen(false);
                }}
              ></i>
              <i onClick={() => {
                handleKeranjangCLick();
                setMenuOpen(false);
              }} className="fa-solid fa-cart-shopping cursor-pointer hover:text-green-700 transition"></i>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
