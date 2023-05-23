import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import FreshOrganic from './pages/OurFeatures/FreshOrganic';
import FreeDelivery from './pages/OurFeatures/FreeDelivery';
import EasyPayment from './pages/OurFeatures/EasyPayment';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/features/freshorganic' element={<FreshOrganic />} ></Route>
        <Route path='/features/freedelivery' element={<FreeDelivery />} ></Route>
        <Route path='/features/easypayment' element={<EasyPayment />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;