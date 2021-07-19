import "./styles/AboutUs.css";
import Graig from "./imgs/Graig.png";
import Darwin from "./imgs/Darwin.png";
import lineBurstOrange from "./imgs/line-burst-orange.png";
import lineBurstBlue from "./imgs/line-burst-blue.png";

function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsTop">
        <h1>ABOUT US</h1>
        <p>
          “The imagination is central to life and to learning at every age and
          that it is through the exercise of the imagination, grounded in play,
          that children begin to explore the human condition.”
        </p>
        <p className="quote">
          —Professor Michael Armstrong, Bread Loaf School of English
        </p>
        <p>
          Kids know how to tell sophisticated and clever and silly and scary and
          whimsical and fantastic and adventurous and heartbreaking stories at a
          very young age.
        </p>
        <p>
          Preserving access to this literary imagination is a project worth
          championing for everyone, and it is why Story Squad was founded in the
          first place.
        </p>
      </div>
      <div className="aboutUsBottom">
        <div className="founder">
          <div className="upperFlairCont">
            <div className="flairContainer">
              <img className="orangeFlair" src={lineBurstOrange} alt="flair" />
              <img className="graig" src={Graig} alt="Founder 1" />
            </div>
          </div>

          <div className="founderTextContent">
            <h1>Graig Peterson, co-founder</h1>
            <p>
              Graig is a former classroom teacher, management consultant and
              PADI Divemaster with an AB from Dartmouth and an MA in English
              from Middlebury. His favorite book series in 4th grade was the
              Boxcar Children.
            </p>
          </div>
        </div>
        <div className="founder">
          <div className="upperFlairCont">
            <div className="flairContainer">
              <img className="graig" src={Darwin} alt="Founder 1" />
            </div>
          </div>
          <div className="founderTextContent">
            <h1>Darwin Johnson, co-founder</h1>
            <p>
              Darwin is a Graduate of Lambda School’s inaugural Data Science
              Cohort and was Section Lead for its 3rd DS Cohort. He has over 20
              years’ experience in the IT consulting space, including three
              years as IT Director for the Somaly Mam Foundation, an
              international non-profit fighting modern day slavery. His career
              focus has been at the intersection of technology and social
              responsibility.
            </p>

          </div>
          {/* <div className='blueFlairCont'>
              <img className="blueFlair" src={lineBurstBlue} alt="flair" />
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
