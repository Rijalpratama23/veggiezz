import React from 'react';
import CardUser from '../../Components/Profile/CardUser';

const ContentProfile = () => {
  return (
    <div className="min-h-screen secondary pt-10 md:pt-20">
      <div className="poster m-5 md:m-10 rounded-2xl  p-10 md:p-15">
        <div className="text-center">
          <h1 className="font-medium text-2xl md:text-4xl font-acme">PROFILE</h1>
          <h2 className="font-actor text-xl md:text-2xl">Kelola Detail Akun Anda</h2>
        </div>
        <div className="md:flex justify-center gap-20 md:gap-60 mt-10 md:mt-20">
          <CardUser title="Profile Penjual" target="/settingPenjual" icon={<i className="fa-solid fa-user-lock color-primary text-4xl md:text-9xl m-5"></i>} />
          <CardUser title="Profile Pembeli" target="/settingPembeli" icon={<i class="fa-solid fa-user-check color-primary text-4xl md:text-9xl m-5"></i>} />
        </div>
      </div>
    </div>
  );
};

export default ContentProfile;
