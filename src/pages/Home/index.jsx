import React from 'react';
import Banner from '../../components/Banner';
import Features from '../../components/Features';
import ScrollImage from '../../components/ScrollImage'
import Products from '../../components/Products';
import Categories from '../../components/Categories';

export default function Home() {
  return (
   <>
    <Banner />
    <Features />
    <Categories />
    <ScrollImage />
    <Products />
   </>
  );
}