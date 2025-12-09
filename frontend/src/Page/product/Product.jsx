import React from "react";
import { useNavigate } from "react-router-dom";
import CtaCategory from "../../Components/Product/CtaCategory";
import CardProduct from "../../Components/Product/CardProduct";
import Header from "../../Components/Header";


const Product = () => {
  return (
    <div className="min-h-screen mt-20 poster p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8">
      <Header />
      <CtaCategory />
      <CardProduct />
    </div>
  );
};

export default Product;
