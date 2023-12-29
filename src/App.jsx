import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Shop from './Home/Shop/Shop';
import SneakerInfoPage from './Home/Shop/SneakerInfo/SneakerInfoPage';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/shop/:name" element={<SneakerInfoPage/>}/>
    </Routes>
  );
}

export default App
