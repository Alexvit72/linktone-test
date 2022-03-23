import React, { useState } from 'react';
import avatar from '../assets/images/avatar.jpg';
import profile from '../assets/images/profile-icon.svg';
import exit from '../assets/images/exit-icon.svg';
import arrowDown from '../assets/images/arrow-down.svg';


const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-wrap">
      <div className={`profile-block ${isOpen ? 'drop' : ''}`}>
        <div className="content">
          <div className="user">
            <img className="avatar" src={avatar} alt="" />
            <div className="info">
              <p className="name">Mikhail Kosmosov</p>
              <p className="status">Superadmin</p>
            </div>
          </div>
          <img className="open" src={arrowDown} alt="" onClick={openMenu} />
        </div>
        <div className="menu">
          <div className="menu-item">
            <img src={profile} alt="" />
            <a href="/">Профиль</a>
          </div>
          <div className="menu-item">
            <img src={exit} alt="" />
            <a href="/">Выход</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;
