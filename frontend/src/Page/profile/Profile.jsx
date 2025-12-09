import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContentProfile from '../../Components/Profile/ContentProfile';
import Header from '../../Components/Header';

const Profile = () => {
  return (
    <div>
      <Header />
      <ContentProfile />
    </div>
  );
};

export default Profile;
