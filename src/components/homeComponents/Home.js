import Player from "./Player";
import Intro from "./Intro";
import TrendingAnimation from "./TrendingAnimation";
import "./home.css";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="home_container">
        <h1 className="myName"> Greatmen of Doings</h1>
        <h2>
          <Intro />
        </h2>
        <br />
        <>
          <Player />
        </>
      </div>
      <div className="container2">
        <div className="hero-shape custom-animation">
          <TrendingAnimation />
        </div>
        <d></d>
      </div>
      <div className="audio-player"></div>
    </div>
  );
};

export default Home;
