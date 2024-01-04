import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Home/Nav.jsx'
import Footer from "./Home/Footer";
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter >
    <Nav />
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
