// import styled from "styled-components";
import Pencil from "./imgs/hero-pencil.png";
import Thinking from "./imgs/thinking.gif";
import Background from "./imgs/background-screentime.png";
import "./styles/Top.css";

function Top() {
  return (
    <div className="parentContainerTop">
      <div className="containerOne">
        <div>
          <img src={Pencil} alt="hero_pencil" />
        </div>
        <div className="textAndButton">
          <h2>WHERE KIDS CAN BECOME</h2>
          <h2>PRIZE-WINNING AUTHORS</h2>
          <h2> EVERY DAY</h2>
          <p>
            {" "}
            In a world of endless screentime, Story Squad set out to inspire
            kids to tap into their natural creativity armed with only a pencil &
            piece of paper.
          </p>
          {/* AWAITING PAGES */}
          {/* <button>
            <p>Learn More</p>
          </button> */}
        </div>
      </div>
      <div className="containerTwo">
        <div>
          <img src={Thinking} alt="thought bubble" />
        </div>
        <div className="gifAndText">
          <h4>WHEN WAS THE LAST TIME...</h4>
          <p>Their wild and wooly creative side got a chance to shine?</p>
        </div>
      </div>
      <div className="containerThree">
        <img src={Background} alt="pencil" />
        <div className="textAndButton2">
          <p>
            Join us as we build the world’s first creative writing e-sports
            league
            <span className="desktop-only">
              {" "}
              armed with a pencil, paper, and their brilliant minds
            </span>
            .
          </p>
          {/* AWAITING PAGES */}
          {/* <button>Sign Up</button> */}
        </div>
      </div>
    </div>
  );
}

export default Top;
