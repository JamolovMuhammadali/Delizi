import React from 'react'
import Header from '../companents/Header'
import Footer from '../companents/Footer'
import '../companents/Contact.css'


function Contact() {
    return (
        <div className='wrap-contact'>
            <Header />

            <div className="contact">
                <h1>Contact us</h1>
                <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            </div>
            
            <Footer />
        </div>
    )
}

export default Contact