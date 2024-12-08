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
      <dic>
        <p className="paragraph">
          "Forget the promise of progress and understanding, for in the grim darkness of the far future, there is only war. There is no peace amongst the stars, only an eternity of carnage and slaughter, and the laughter of thirsting gods."
        </p>
      </dic>
    </div>
  );
};

export default Home;
