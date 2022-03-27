import React, { useState } from 'react';
import menu from '../assets/images/menu-icon.png';
import CategoryItem from './CategoryItem';
import artists from '../assets/images/artists-icon.png';

import categories from '../assets/categories';


const ArtistNav = ({ shown, toggle }) => {

  const [openedCategory, setOpenedCategory] = useState('');

  const openMenu = (name) => {
    if (openedCategory === name) {
      setOpenedCategory('');
    } else {
      setOpenedCategory(name);
    }
  };

  return (
    <aside className={`artists-nav ${shown ? 'wide' : ''}`}>
      <header className="artists-nav_header">
        <h3>Навигация</h3>
        <div className="artists-nav-open" onClick={toggle}>
          <div className="icon">
            <img src={menu} alt="открыть" />
          </div>
        </div>
      </header>
      <div className="artists-nav-content">
        <div className="categories">
          <a href="#" className="category category-title">
            <div className="category-inner">
              <div className="category-icon">
                <img src={artists} alt="" />
              </div>
              <span>Артисты</span>
            </div>
          </a>
          {categories.map((category, index) => {
            return (
              <CategoryItem key={index}
                name={category.name}
                href={category.href}
                icon={category.icon}
                opened={openedCategory === category.name}
                onClick={openMenu}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}


export default ArtistNav;
