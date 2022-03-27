import React from 'react';
import home from '../assets/images/home.svg';
import arrowLeft from '../assets/images/arrow-left.png';


const HeaderMain = () => {

  const openCalendar = (e) => {
    let app = document.querySelector('.App');
    app.classList.toggle('with-calendar');
    e.currentTarget.children[0].classList.toggle('open');
  };

  return (
    <header className="main-header">
      <h2>Артисты</h2>
      <div className="right-nav">
        <ul className="breadcrumbs">
          <li><a href='#'><img src={home} alt="" /></a></li>
          <li>Главная</li>
        </ul>
        <div className="toggle-right" onClick={(e) => openCalendar(e)} >
          <img src={arrowLeft} alt="календарь" />
        </div>
      </div>
    </header>
  );
}


export default HeaderMain;
