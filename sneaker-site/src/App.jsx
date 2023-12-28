import { useState } from 'react'
import Landing from './Home/Landing'
import Nav from './Home/Nav'
import ProductPage from './Products/Prodcuts'

function App() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Nav />
      <Landing />
      <ProductPage slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default App
