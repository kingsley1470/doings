import React, { useState, useEffect } from 'react';
import './trending.css';

function TrendingAnimation() {
  const [isTrending, setIsTrending] = useState(false);

  useEffect(() => {
    // Start the trending animation after component mount
    setIsTrending(true);

    // Clean up the animation on component unmount
    return () => {
      setIsTrending(false);
    };
  }, []);

  return (
    <div className={`trending ${isTrending ? 'trending-animate' : ''}`}>
      <span role="img" aria-label="Trending">
        🔥
      </span>
      Greatmen!
    </div>
  );
}

export default TrendingAnimation;
