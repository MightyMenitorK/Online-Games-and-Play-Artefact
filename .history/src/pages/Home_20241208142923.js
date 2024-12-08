import React, { useRef, useEffect } from "react";
import bannerVideo from "../resources/vids/banner.mp4";
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch((error) => console.error("Play failed:", error));
    }
  }, []);

  return (
    <div>
      <div className="video-container">
        <video ref={videoRef} src={bannerVideo} autoPlay loop className="background-video" />
        <div className="content">
          <h1 className="title gametitle">WH</h1>
        </div>
      </div>
      <p className="paragraph">
        This is a paragraph of text below the video. You can add more content here as needed.
      </p>
    </div>
  );
};

export default Home;
