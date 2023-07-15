import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true); // Added form validation state

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !message) {
      setIsFormValid(false);
      return;
    }

    emailjs.init("qDUicVXIOxmVy0rMb"); // Replace with your actual user ID

    const emailParams = {
      from_name: name,
      phone: phone,
      email: email,
      message: message,
    };

    emailjs
      .send("service_ngegl2j", "template_on201gq", emailParams)
      .then((response) => {
        alert("Email sent successfully!", response.text);
        // Clear the input fields after sending the message
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIsFormValid(true); // Reset form validation state
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
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="input-field"
              name="email"
            />
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              className="input-field"
              name="message"
            ></textarea>
            {!isFormValid && (
              <p style={{ color: "red" }}>Please fill in all fields.</p>
            )}
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
