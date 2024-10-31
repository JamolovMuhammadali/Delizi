import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './companents/Home';
import Login from './companents/Login';
import Signup from './companents/Signup';
import MenuItems from './companents/MenuItems';
import ResetPassword from './companents/ResetPassword';
import AboutUs from './companents/AboutUs';
import Reservation from './companents/Reservation';
import Contact from './companents/Contact';
import OrderOnline from './companents/Orderonline';
import Cart from './companents/Cart';
import Checkout from './companents/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ];
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/menu' element={<MenuItems addItemToCart={addItemToCart} />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/orderonline' element={<OrderOnline />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
          <Route path='/checkout' element={<Checkout cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
