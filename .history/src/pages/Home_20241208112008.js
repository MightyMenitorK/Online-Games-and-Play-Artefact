const Home = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      // Ensure the video is playing automatically on component mount
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
  
    return (
      <div>
        {/* Video banner */}
        <div className="video-banner">
          <video
            ref={videoRef}
            src="/resources/intro.mp4"
            autoPlay
            loop
            muted={false}  // Keep audio enabled
            poster="/resources/imperium.png"
          />
        </div>
  
        <h1>Welcome to Our Website!</h1>
        <p>Explore our games, videos, and more...</p>
      </div>
    );
  };
  
  export default Home;