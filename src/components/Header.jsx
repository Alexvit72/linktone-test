import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.svg';
import menu from '../assets/images/menu-icon-white.svg';
import Profile from './Profile';


const Header = ({ onClick }) => {

  const [value, setValue] = useState('');

  const searchRequest = (e) => {
    console.log('value', value);
  };

  return (
    <header className="App-header">
      <div  className="logo">
        <a href="/"><img className="logo-image" src={logo} alt="linktone" /></a>
        <div className="toggle" onClick={onClick}>
          <img src={menu} alt="" />
        </div>
      </div>
      <div className="right">
        <form action="/" onSubmit={(e) => searchRequest(e)}>
          <div className="search-block">
            <input type="text"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Поиск..."
            />
            <button className="search-icon">
              <img src={search} alt="искать"></img>
            </button>
          </div>
        </form>
        <Profile />
      </div>
    </header>
  );
}


export default Header;
