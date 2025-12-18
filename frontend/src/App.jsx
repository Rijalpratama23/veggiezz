import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Home from './Page/Home/Home';
import Profile from './Page/profile/Profile';
import Keranjang from './Page/keranjang/Keranjang';
import Promo from './Page/promo/Promo';
import Product from './Page/product/Product';
import Contact from './Page/contact/Contact';
import About from './Page/about/About';
import SettingPembeli from './Page/Setting/SettingPembeli';
import SettingPenjual from './Page/Setting/SettingPenjual';
import CompliteOrder from './Page/CompliteOrder/CompliteOrder';
import ConfirmFaid from './Page/ConfirmPaid/ConfirmFaid';
import FormEditProduct from './Page/DaftarProduct/FormEditProduct';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/keranjang" element={<Keranjang />} />
      <Route path="/compliteOrder" element={<CompliteOrder />} />
      <Route path="/confirmFaid" element={<ConfirmFaid />} />
      <Route path="/products/edit/:id" element={<FormEditProduct />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/settingPembeli" element={<SettingPembeli />} />
      <Route path="/settingPenjual" element={<SettingPenjual />} />
    </Routes>
  );
};

export default App;
