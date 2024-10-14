import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../companents/Contact.css'
import Alert from './Alert'
import { useNavigate } from "react-router-dom";



function Contact() {

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // For success alert
    const [showErrorAlert, setShowErrorAlert] = useState(false); // For error alert

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const telegramBotToken = '7166400728:AAENydLWNB8DEtbhVjT9X3QJj3NOxtNnNM4'; // Replace with your bot token
    const chatId = '5724981036'; // Replace with your chat ID

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowSuccessAlert(true); // Trigger success alert
        // Send form data to the Telegram bot
        const message = `
          New Contact Form Submission:
          - First Name: ${formData.firstName}
          - Last Name: ${formData.lastName}
          - Email: ${formData.email}
          - Subject: ${formData.subject}
          - Message: ${formData.message}
        `;

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    console.log("Message sent to Telegram bot");

                    // Reset the form
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    console.error("Error sending message to Telegram bot:", data);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    return (
        <div className='wrap-contact'>
            <Header />
            {showSuccessAlert && <Alert message="Success!" showAlert={showSuccessAlert} />}
            {showErrorAlert && <Alert message={error} showAlert={showErrorAlert} />}
            <div className="contact">
                <h1>Contact us</h1>
                <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <div className="contact-input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="contact-textarea"
                    ></textarea>
                    <button type="submit" className="contact-submit-btn">Submit</button>
                </form>

            </div>

            <Footer />
        </div>
    )
}

export default Contact