import React from 'react';
import './App.scss';
import Header from './components/Header';
import DatePicker from './components/DatePicker';
import HeaderMain from './components/HeaderMain';
import ArtistNav from './components/ArtistNav';
import Artists from './components/Artists';

function App() {
  return (
    <div className="App">
      <Header />
      <DatePicker />
      <main className="main">
        <HeaderMain />
        <ArtistNav />
        <Artists />
      </main>
    </div>
  );
}

export default App;
