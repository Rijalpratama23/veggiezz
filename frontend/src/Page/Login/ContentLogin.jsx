import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import logoLogin from '../../assets/logoLogin.png';
import gambarLogin from '../../assets/gambarLogin.png';


const Content = () => {
   const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // pindah ke halaman Home
  };
    return(
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-[900px] overflow-hidden">
        {/* Kiri */}
        <div className="flex-1 p-8">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img src={logoLogin} alt="Logo" className="w-30 h-30 object-contain" />
            <h1 className="text-3xl font-bold color-primary font-lemon ml-2">VeggieZ</h1>
          </div>

          {/* Form */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900 font-primary">Login ke Akun VeggieZ</h2>

          <form className="space-y-4">
            {/* Email */}
            <div className="border rounded-2xl px-4 py-2 flex items-center">
              <input type="email" placeholder="Email" className="w-full outline-none text-gray-700 placeholder-gray-400" />
            </div>

            {/* Password */}
            <div className="border rounded-2xl px-4 py-2 flex items-center">
              <input type="password" placeholder="Password" className="w-full outline-none text-gray-700 placeholder-gray-400" />
            </div>

            {/* Checkbox + Lupa Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 accent-green-600" />
                <span>Ingat Saya</span>
              </label>
              <a href="#" className="color-primary hover:underline">
                Lupa Password?
              </a>
            </div>

            {/* Tombol Login */}
            <Button onClick={handleLogin} title='Login'/>

            {/* Garis pembatas */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-sm">Atau Masuk Dengan</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Ikon Sosial */}
            <div className="flex justify-center space-x-8">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-8 h-8" />
              </a>
            </div>
          </form>
        </div>

        {/* Kanan */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center p-6">
          <img src={gambarLogin} alt="Sayur" className="w-[357px] h-auto mb-2" />
          <p className="text-green-600 text-center italic font-anime text-xl">Eat Fresh, Live Green with VeggieZ</p>
        </div>
      </div>
    )
}

export default Content;