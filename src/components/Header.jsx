import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.svg';
import Profile from './Profile';


const Header = () => {

  const [value, setValue] = useState('');

  const searchRequest = () => {
    console.log(value);
  };

  return (
    <header className="App-header">
      <div  className="logo">
        <a href="/"><img src={logo} alt="linktone" /></a>
      </div>
      <div className="right">
        <div className="search-block">
          <input type="text" onChange={(e) => setValue(e.target.value)} />
          <div className="search-icon">
            <img src={search} alt="искать" onClick={searchRequest}></img>
          </div>
        </div>
        <Profile />
      </div>
    </header>
  );
}


export default Header;
