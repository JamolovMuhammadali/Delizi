import React from 'react'
import './Orderonline.css'
import Header from './Header'
import Footer from './Footer'
import MenuItems from './MenuItems'


function Orderonline() {
    return (
        <div className="order">
            <Header />
            <h1 className='order-title'>Menu</h1>
            <MenuItems itemsPerPage={6} />
            <Footer />
        </div>
    )
}

export default Orderonline