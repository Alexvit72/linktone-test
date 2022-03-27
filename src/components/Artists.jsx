import React, { useState } from 'react';
import ArtistsItem from './ArtistsItem';
import Pagination from 'rc-pagination';
import search from '../assets/images/search-light.svg';
import arrow from '../assets/images/arrow-down-gray.svg';

import artists from '../assets/artists';
import artistsTypes from '../assets/artistsTypes';

const Artists = () => {

  const [openedTypes, setOpenedTypes] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = page => {
    setCurrentPage(page);
  };

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
        <div className={`types ${openedTypes ? 'opened' : ''}`}>
          <div className="title">
            <h5>Типы артистов</h5>
            <div className="icon" onClick={() => setOpenedTypes(!openedTypes)}>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="groups">
          {artistsTypes.map((type, index) => {
            return (
              <p className="group-item" key={index}>
                <span>{type.name}</span>
                <span>{type.count}</span>
              </p>
            );
          })}
          </div>
        </div>
        <div className="content">
          <div className="page">
            {artists.slice((currentPage - 1) * 8, currentPage * 8).map((artist, index) => {
              return <ArtistsItem artist={artist} key={index} />
            })}
          </div>
          <div className="pagination">
            <Pagination
              onChange={handleChange}
              current={currentPage}
              total={artists.length}
              pageSize={8}
              showTotal={(total, range) => `Показано ${range[0]} - ${range[1]} из ${total} артистов`}
              prevIcon={'<'}
              nextIcon={'>'}
              jumpPrevIcon={'...'}
              jumpNextIcon={'...'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Artists;
