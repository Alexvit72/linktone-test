import React, { useState } from 'react';
import menu from '../assets/images/menu-icon.png';
import CategoryItem from './CategoryItem';
import artists from '../assets/images/artists-icon.png';
import music from '../assets/images/music-icon.png';

const categories = [
  {name: 'СЛОТ', href: '#', icon: music},
  {name: 'Модем', href: '#', icon: music},
  {name: 'Таймсквер', href: '#', icon: music},
  {name: 'Нуки', href: '#', icon: music},
];


const ArtistNav = () => {

  const [openedNav, setOpenedNav] = useState(false);
  const [openedCategory, setOpenedCategory] = useState('');

  const showWide = () => {
    setOpenedNav(openedNav => !openedNav);
  };

  const openMenu = (name) => {
    if (openedCategory === name) {
      setOpenedCategory('');
    } else {
      setOpenedCategory(name);
    }
  };

  return (
    <aside className={`artists-nav ${openedNav ? 'wide' : ''}`}>
      <header className="artists-nav_header">
        <h3>Навигация</h3>
        <div className="artists-nav-open" onClick={showWide}>
          <div className="icon">
            <img src={menu} alt="открыть" />
          </div>
        </div>
      </header>
      <div className="artists-nav-content">
        <div className="categories">
          <a href="/" className="category category-title">
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
