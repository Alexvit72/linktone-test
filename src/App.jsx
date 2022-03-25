import React from 'react';
import './App.scss';
import Header from './components/Header';
import Calendar from './components/Calendar';
import HeaderMain from './components/HeaderMain';
import ArtistNav from './components/ArtistNav';
import Artists from './components/Artists';

function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <section className="main-wrap">
          <ArtistNav />
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
