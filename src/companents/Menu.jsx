import React from 'react'
import Header from '../companents/Header'
import Footer from '../companents/Footer'
import MenuItems from './MenuItems'
import '../companents/Menu.css'

function Menu() {
  return (
    <div>
        <Header/>
        <div className="menu">
            <h1 className='menu-h1'>Menu</h1>
            <MenuItems itemsPerPage={6} />
        </div>
        <Footer/>
    </div>
  )
}

export default Menu