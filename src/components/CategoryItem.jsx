import React from 'react';
import arrow from '../assets/images/arrow-down-light.svg';

const menuItems = ['Профиль', 'Релизы', 'Видео', 'Концерты', 'Настройки'];


const CategoryItem = ({ icon, href, name, opened, onClick }) => {

  return (
    <>
      <a href={href} className={`category${opened ? ' opened' : ''}`} onClick={() => onClick(name)}>
        <div className="category-inner">
          <div className="category-icon">
            <img src={icon} alt="" />
          </div>
          <span>{name}</span>
        </div>
        <img src={arrow} alt="" className="arrow" />
      </a>
      <div className="category-menu">
        {menuItems.map((item, index) => {
          return <a href="#" key={index}>{item}</a>;
        })}
      </div>
    </>
  );
};


export default CategoryItem;
