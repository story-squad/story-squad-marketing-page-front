import "./styles/Mission.css";
import MissionImg from "./imgs/mission.png";
import DemographicImg from "./imgs/demographic.png";
import DiffenceImg from "./imgs/different.png";
import Brain from "./imgs/emoji-brain.png";
import Art from "./imgs/emoji-art.png";
import Trophy from "./imgs/emoji-trophy.png";
import OldSchool from "./imgs/background-oldSchool.png";
function Mission() {
  return (
    <div className="MissionContainer">
      <div className="missionBlock">
        <div className="grid-div-mission">
          <img className="missionLayer1 first" src={MissionImg} alt="first" />

          <div className="missionLayer2">
            <h1>Our Mission</h1>
            <p>Human connection through creative expression.</p>
          </div>
        </div>
      </div>

      <div className="missionBlock">
        <div className="grid-div-mission">
          <img
            className="missionLayer1 second"
            src={DemographicImg}
            alt="first"
          />

          <div className="missionLayer2">
            <h1>WHO’S IT FOR?</h1>
            <p>8-12 year olds & adults young at heart!</p>
          </div>
        </div>
      </div>

      <div className="missionBlock">
        <div className="grid-div-mission">
          <img className="missionLayer1 third" src={DiffenceImg} alt="first" />

          <div className="missionLayer2">
            <h1>HOW ARE WE DIFFERENT?</h1>
            <p className="missionMobile">Achieving unique things everyday</p>

            <div className="missionDesktop">
              <div className="differentOne">
                <img src={Brain} alt="brain" />
                <p>
                  For fun, kids—whose brains are vulnerable to blasts of
                  dopamine—are bingeing on Fortnite, TikTok or YouTube & these
                  rings, dings & pings keep kids staring zombie-fied in a
                  digital abyss.
                </p>
              </div>
              <div className="differentTwo">
                <img src={Art} alt="Art" />
                <p>
                  Story Squad offers a radical alternative: maximize the time
                  your child spends offline in “creative mode” armed with only
                  loose-leaf sheets of paper and a pencil.
                </p>
              </div>
              <div className="differentThree">
                <img src={Trophy} alt="Trophy" />
                <p>
                  We re-purpose the reward structure of video games—an activity
                  kids know all too well—to motivate them in their reading,
                  writing & drawing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oldSchoolContainer">
        <img className="oldSchoolImage" src={OldSchool} alt="oldschool" />
        <div className="oldSchoolText">
          <h1>Old School meets New School</h1>
          <p>
            Tools designed to unlock your child’s creative potential Each of our
            products starts with scribbling down something from your own
            imagination (the “Story” part) and turning it into a friendly game
            (the “Squad” part).
          </p>
          <button className='oldSchoolJoin'>JOIN THE IMAGINATION REVOLUTION!</button>
        </div>
      </div>
    </div>
  );
}

export default Mission;
