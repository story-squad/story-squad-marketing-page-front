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
    <div className="MissionContainer" id="mission">
      <div className="missionContentContainer">
        <img className="one" src={MissionImg} alt="hero_pencil" />
        <div className="missionTextAndImg">
          <h3>Our Mission</h3>
          <p>Human connection through creative expression</p>
        </div>
      </div>

      <div className="missionContentContainer">
        <img className="two" src={DemographicImg} alt="hero_pencil" />
        <div className="missionTextAndImg">
          <h3>WHO’S IT FOR?</h3>
          <p>8-14 year olds</p>
        </div>
      </div>
      {/* MOBILE */}
      <div className="missionHide">
        <div className="missionContentContainer">
          <img className="three" src={DiffenceImg} alt="hero_pencil" />
          <div className="missionTextAndImg">
            <h3>3 WAYS WE ARE WE DIFFERENT...</h3>
          </div>
        </div>

        <div className="missionDifferencesMobile">
          <div className="differentMobile">
            <img src={Brain} alt="brain" />
            <p>
           1. Kids’ brains are vulnerable to blasts of dopamine caused by bingeing on video games and social media.
            </p>
          </div>
          <div className="differentMobile">
            <img src={Art} alt="Art" />
            <p>
           2. Story Squad uses small servings of screentime to drive kids back into offline creative mode.

            </p>
          </div>
          <div className="differentMobile">
            <img src={Trophy} alt="Trophy" />
            <p>
           3. We re-purpose the social reward structure of video games to motivate them in reading & writing.
            </p>
          </div>
        </div>
      </div>
      {/* DESKTOP */}

      <div className="missionContentContainer desktop">
        <div className="missionDeskText">
          <img className="three" src={DiffenceImg} alt="hero_pencil" />
          <div className="missionTextAndImg">
            <h3 id="desktopText">3 WAYS WE ARE WE DIFFERENT...</h3>
          </div>
          <div className="missionDifferencesDesktop">
            <div className="differentDesktop">
              <img src={Brain} alt="brain" />
              <p>
              Kids’ brains are vulnerable to blasts of dopamine caused by bingeing on video games and social media.
              </p>
            </div>
            <div className="differentDesktop">
              <img src={Art} alt="Art" />
              <p>
              Story Squad uses small servings of screentime to drive kids back into offline creative mode.
              </p>
            </div>
            <div className="differentDesktop">
              <img src={Trophy} alt="Trophy" />
              <p>
              We re-purpose the social reward structure of video games to motivate them in reading & writing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="oldSchoolContainer">
        <img className="oldSchoolImage" src={OldSchool} alt="oldschool" />
        <div className="oldSchoolText">
          <h3>"Old School, meet New School"</h3>
          <h4>Tools designed to unlock your child’s creative potential.</h4>
          <p>
          Based on the <a href="https://norwegianscitechnews.com/2020/10/why-writing-by-hand-makes-kids-smarter/" target="_blank" rel="noopener noreferrer">latest brain research</a>, our handwriting-based app unlocks kids’ creative superpowers by turning story-writing into a daily competition. Language arts learning has never been so much FUN!
          </p>
          {/* AWAITING PAGES */}
          {/* <button className="oldSchoolJoin">
            JOIN THE IMAGINATION REVOLUTION!
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Mission;
