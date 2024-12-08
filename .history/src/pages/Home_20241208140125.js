import React, { useRef, useEffect } from "react";
import bannerVideo from "../resources/vids/banner.mp4";

import './Home.css'

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
    <div className="video-container">
      <video ref={videoRef} src={bannerVideo} autoPlay loop className="background-video" />
      <div className="content">
        <h1 className="title gametitle">WH</h1>
        <h2 className="title undertitle">40k</h2>
      </div>
    </div>
  );
};

export default Home;
