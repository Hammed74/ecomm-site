import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Shop from './Home/Shop/Shop';
import SneakerInfoPage from './Home/Shop/SneakerInfo/SneakerInfoPage';
import Cart from './Cart/Cart';
function App() {
  const [cart, setCart] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/shop/:name" element={<SneakerInfoPage cart={cart} setCart={setCart} />}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
  );
}

export default App
