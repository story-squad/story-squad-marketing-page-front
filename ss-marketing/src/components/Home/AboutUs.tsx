import "./styles/AboutUs.css";
import Graig from "./imgs/Graig.png";
import Darwin from "./imgs/Darwin.png";
import lineBurstOrange from "./imgs/line-burst-orange.png";
import lineBurstBlue from "./imgs/line-burst-blue.png";

function AboutUs() {
  return (
    <div className="aboutUsContainer" id="aboutUs">
      <div className="aboutUsTop">
        <h3>ABOUT US</h3>
        <p>
          We’re a team of educators, designers, engineers, and data scientists
          who believe that kids, when given the chance to express themselves
          creatively, know how to tell sophisticated and clever and silly and
          scary and whimsical and fantastic and adventurous and heartbreaking
          stories at a young age. Preserving access to this literary imagination
          is a project worth championing for all kids around the world, and it
          is why Story Squad was founded.
        </p>
        <p>
          While building this app, we are merely custodians. Ultimately, Story
          Squad will belong to the creative community of kids, their parents and
          inspiring teachers; we promise to serve this community and deliver on
          our mission—and never have our strategy set by trying to maximize a
          user’s time-on-device.
        </p>
      </div>

      {/* <div className="aboutUsBottom">
        <div className="founder">
          <div className="upperFlairCont">
            <div className="flairContainer">
              <img className="graig" src={Graig} alt="Founder 1" />
              <img className="blueFlair" src={lineBurstBlue} alt="flair" />
            </div>
          </div>

          <div className="founderTextContent">
            <h3>Graig Peterson, co-founder</h3>
            <p>
              Graig is a former classroom teacher, management consultant and
              PADI Divemaster with an AB from Dartmouth and an MA in English
              from Middlebury. His favorite book series in 4th grade was the
              Boxcar Children.
            </p>
          </div>
        </div>
        
        <div className="founder">
          <div className="founderTextContent">
            <h3>Darwin Johnson, co-founder</h3>
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
          <div className="upperFlairCont">
            <div className="flairContainer">
              <img className="orangeFlair" src={lineBurstOrange} alt="flair" />
              <img className="graig" src={Darwin} alt="Founder 1" />
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default AboutUs;
