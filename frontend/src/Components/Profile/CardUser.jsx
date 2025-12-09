import React from 'react';
import Button from '../../Components/Button';
import { Link, useLocation, useNavigate } from  "react-router-dom";

const CardUser = ({ title, icon, target }) => {
  const navigate = useNavigate();
  return (
    <div className="card1 bg-white rounded-2xl p-5 md:p-10 text-center shadow-2xl mt-5 md:mt-7">
      <h3 className="font-actor text-xl">{title}</h3>
      {icon}
      <Button title="EDIT PROFILE" onClick={() => navigate(target)} />
    </div>
  );
};

export default CardUser;
