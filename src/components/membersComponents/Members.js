import React from "react";
import data from "./Data";
import BubblingMessageAnimation from "./BubblingMessageAnimation";
import "./members.css"; // Import the CSS file

const Members = () => {
  return (
    <div className="members-container">
      <div className="show-members">
        <BubblingMessageAnimation />
      </div>
      <div className="member-cards-container">
        {data.map((item) => (
          <div className="member-card" key={item.id}>
            <div className="image-container">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="member-image"
              />
            </div>
            <div className="member-details">
              <h3>{item.name}</h3>

              <p>Title: {item.title}</p>
              <p>Occupation: {item.occupation}</p>
              <p>
                Location: {item.city}, {item.country}
              </p>
              <p>Contact: {item.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
