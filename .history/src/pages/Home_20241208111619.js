import React from 'react'

function Home() {
    const audioRef = useRef(null);

    useEffect(() => {
      // Automatically play audio when the component mounts
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, []);
  
    return (
      <div>
        {/* Video banner */}
        <div className="video-banner">
          <video
            src="/resources/intro.mp4"
            autoPlay
            loop
            muted
            poster="/resources/imperium.png"
          />
          {/* Audio element */}
          <audio ref={audioRef} src="/resources/background-audio.mp3" loop />
        </div>
  
        <h1>Welcome to Our Website!</h1>
        <p>Explore our games, videos, and more...</p>
      </div>
    );
};

export default Home
