import React, { useRef, useEffect } from 'react';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;  // Automatically mute the video
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      {/* Video banner */}
      <div className="video-banner">
        <video
          ref={videoRef}
          src="../recources/intro.js"
          autoPlay
          loop
          muted
          poster="../resources/imperium.png"
        />
      </div>

      <h1>Welcome to Our Website!</h1>
    </div>
  );
};

export default Home;
