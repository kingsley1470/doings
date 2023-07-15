import React, { useState } from "react";
import data from "./Data";
import BubblingMessageAnimation from "./BubblingMessageAnimation";
import "./members.css";

const Members = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(cardId === expandedCard ? null : cardId);
  };

  return (
    <div className="members-container">
      <div className="show-members">
        <BubblingMessageAnimation />
      </div>
      <div className="member-cards-container">
        {data.map((item) => (
          <div
            className={`member-card ${expandedCard === item.id ? "expanded" : ""}`}
            key={item.id}
            onClick={() => handleCardClick(item.id)}
          >
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
              <p>Position: {item.position}</p>
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
