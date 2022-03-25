import React from 'react';
import search from '../assets/images/search-light.svg';


const Artists = () => {
  return (
    <div className="artists">
      <div className="top">
        <div className="add">
          + Добавить артиста
        </div>
        <form className="search-block">
          <input type="text" placeholder="Искать артистов" />
          <button className="search-icon">
            <img src={search} alt=""></img>
          </button>
        </form>
      </div>
      <div className="bottom">
        <div className="wrap">
          <div className="types">
          </div>
          <div className="content">
            <div className="page">
            </div>
            <div className="pagination">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Artists;
