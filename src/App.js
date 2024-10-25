import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './companents/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './companents/Login';
import Signup from './companents/Signup';
import Menu from './companents/Menu';
import ResetPassword from './companents/ResetPassword';
import AboutUs from './companents/AboutUs';
import Reservation from './companents/Reservation';
import Contact from './companents/Contact';
import Orderonline from './companents/Orderonline';
import Cart from './companents/Cart';
import MenuItems from './companents/MenuItems';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
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
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Menu' element={<Menu addItemToCart={addItemToCart} />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Reservation' element={<Reservation />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Orderonline' element={<Orderonline />} />
          <Route path='/Cart' element={<Cart removeItemFromCart={removeItemFromCart} cartItems={cartItems} />} />
          <Route path='/MenuItems' element={<MenuItems addItemToCart={addItemToCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
    