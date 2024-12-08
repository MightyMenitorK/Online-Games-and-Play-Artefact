import React, { useRef, useEffect } from "react";
import bannerVideo from "../resources/vids/banner.mp4";
import Overlay from "../components/overlay";
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
      <div className="info-section">
        <p className="paragraph quote">
          "Forget the promise of progress and understanding, for in the grim darkness of the far future, there is only war. There is no peace amongst the stars, only an eternity of carnage and slaughter, and the laughter of thirsting gods."
        </p>
        <p className="paragraph">
        Warhammer 40,000 (WH40k) is a game franchise that depicts a universe of warring races. It was initially a board game play with armies of miniatures but has as of the current date diversified to campus a range of play forms. Due to its early start, it has carved out a fan base long before any video game releases and has even been the inspiration for many old and modern games. 
        </p>
        <p className="paragraph">
        It depicts a world far off into the future where races across the galaxies are in constant battle, and no particular race is particularly winning; everything is burning, and everyone is dying, all at the same time. Warhammer is the first Grim Dark franchise (named after the above quote), a genre of games whose story is overwhelmingly bleak. This genre unlike other serious ones is not intended to make the game players morally grapple with their actions in the games, but rather to revel in it. Since everything is exceedingly violent it desensitises the user to the horrors of this world. In this story, everyone is racist and xenophobic towards one another and humans especially are the most extreme examples of this, being the most hateful species due to their overzealousness.
        </p>
        <p className="paragraph">
        Most of the lore and their adaptations are written from the perspective of humans (for obvious reasons), and the universe is divided into the Imperium of Man (the Human Factions), the Chaos (A faction of demons and gods), and the Zenos (Every non-human other than chaos).
        </p>
        <Overlay>
          <p>John Doe</p>
          <p>Student #12345</p>
          <p>Online Game & Play Final Assignment</p>
        </Overlay>
      </div>
    </div>
  );
};

export default Home;
