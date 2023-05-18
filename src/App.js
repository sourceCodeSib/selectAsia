import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import ScrollImage from './components/ScrollImage'
import Products from './components/Products';
import Categories from './components/Categories';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Features />
      <Categories />
      <ScrollImage />
      <Products />
      <Footer />
    </div>
  );
}

export default App;