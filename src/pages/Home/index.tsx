import React from 'react';
import { Header } from '../../components/Header';
import { List } from '../../components/List';
import { Footer } from '../../components/Footer';
import { Cart } from '../../components/Cart';


export function Home() {
  return (
    <div>
      <Header />
      <List />
      <Footer />
      <Cart />
    </div>
  )
}