import "./styles/Mission.css";
import Brain from "./imgs/emoji-brain.png"
import Art from "./imgs/emoji-art.png"
import Trophy from "./imgs/emoji-trophy.png"
import test from './imgs/mission.png'

function Mission() {
  return (
    <div className="missionContainer">
        <div className='container_row'>
        <img className="layer1" src={test} alt="test" />
      <div className="mission layer2">
        <h2>Our Mission</h2>
        <p>Human connection through creative expression.</p>
      </div>
      </div>
      <div className="demographic">
        <h2>Who's it for?</h2>
        <p>8-12 year olds & adults young at heart!</p>
      </div>
      <div className="different">
        <h2>How are we different?</h2>
        <p>At Story Squad we are creating something unique</p>
        <div className="innerMissionContainerDesktop">
          <div className="differentContent">
            <img src={Brain} alt="brain" />
            <p>
              For fun, kids—whose brains are vulnerable to blasts of
              dopamine—are bingeing on Fortnite, TikTok or YouTube & these
              rings, dings & pings keep kids staring zombie-fied in a digital
              abyss.
            </p>
          </div>
          <div className="differentContent">
            <img src={Art} alt="pallete" />
            <p>
              Story Squad offers a radical alternative: maximize the time your
              child spends offline in “creative mode” armed with only loose-leaf
              sheets of paper and a pencil.
            </p>
          </div>
          <div className="differentContent">
            <img src={Trophy} alt="trophy" />
            <p>
              We re-purpose the reward structure of video games—an activity kids
              know all too well—to motivate them in their reading, writing &
              drawing.
            </p>
          </div>
        </div>
      </div>
      <div className="innerMissionContainerMobile">
          <div className="differentContent">
            <img src={Brain} alt="brain" />
            <p>
              For fun, kids—whose brains are vulnerable to blasts of
              dopamine—are bingeing on Fortnite, TikTok or YouTube & these
              rings, dings & pings keep kids staring zombie-fied in a digital
              abyss.
            </p>
          </div>
          <div className="differentContent">
            <img src={Art} alt="pallete" />
            <p>
              Story Squad offers a radical alternative: maximize the time your
              child spends offline in “creative mode” armed with only loose-leaf
              sheets of paper and a pencil.
            </p>
          </div>
          <div className="differentContent">
            <img src={Trophy} alt="trophy" />
            <p>
              We re-purpose the reward structure of video games—an activity kids
              know all too well—to motivate them in their reading, writing &
              drawing.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Mission;
