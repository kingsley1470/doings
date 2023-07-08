import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
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

  const handleSendMessage = (event) => {
    event.preventDefault();

    emailjs.init("qDUicVXIOxmVy0rMb"); // Replace with your actual user ID

    const emailParams = {
      from_name: name,
      phone: phone,
      message: message,
    };

    emailjs
      .send("service_ngegl2j", "template_on201gq", emailParams) // Replace with your actual service ID and template ID
      .then((response) => {
        alert("Email sent successfully!", response.text);
        // Clear the input fields after sending the message
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="input-field"
              name="name"
            />
            <input
              type="number"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="input-field"
              name="phone"
            />
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              className="input-field"
              name="message"
            ></textarea>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
