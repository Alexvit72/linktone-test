import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Calendar from './components/Calendar';
import HeaderMain from './components/HeaderMain';
import ArtistNav from './components/ArtistNav';
import Artists from './components/Artists';


function App() {

  const [shownCategories, setShownCategories] = useState(false);

  const toggleCategories = () => {
    setShownCategories(!shownCategories);
  };

  return (
    <div className="App">
      <main className="main">
        <Header onClick={toggleCategories} />
        <section className="main-wrap">
          <ArtistNav shown={shownCategories} toggle={toggleCategories} />
          <div className="main-content">
            <HeaderMain />
            <Artists />
          </div>
        </section>
      </main>
      <Calendar />
    </div>
  );
}


export default App;
