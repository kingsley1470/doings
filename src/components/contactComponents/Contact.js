import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement your own functionality for sending a message here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Message:", message);
    // Clear the input fields after sending the message
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <footer>
      <div className="contact-container">
        <h3>Connect with us:</h3>
        <ul className="social-links">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com">
              <FaTiktok /> TikTok
            </a>
          </li>
        </ul>
        <div className="form-container">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className="input-field"
          />
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className="input-field"
          />
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            className="input-field"
          ></textarea>
          <button onClick={handleSendMessage} className="send-button">
            Send Message
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
