import React, { useState, useEffect } from 'react';
 import './bubbling.css'; 

function BubblingMessageAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className={`bubbling-message ${isAnimating ? 'bubbling-animate' : ''}`}>
      <span className="message-text">Members</span>
    </div>
  );
}

export default BubblingMessageAnimation;
