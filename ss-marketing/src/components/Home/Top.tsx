// import styled from "styled-components";
import Pencil from './imgs/hero-pencil.png';
import Thinking from './imgs/thinking.gif';
import Background from './imgs/background-screentime.png';
import './styles/Top.css';

function Top() {
  return (
    <div className='parentContainerTop'>
      <div className="containerOne">
        <div>
          <img src={Pencil} alt="hero_pencil" />
        </div>
        <div className="textAndButton">
          <p>
            Story Squad is the world’s first “creativity arcade” built around
            kids’ original handwritten stories and drawing.
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
          <p>
            Your child laughed with friends as they competed to see who could
            write a funnier pirate story?
          </p>
        </div>
      </div>
      <div className="containerThree">
        <img src={Background} alt="pencil" />
        <div className="textAndButton2">
          <p>
            In a world of infinite screentime, Story Squad set out to inspire
            kiddos to tap into their natural creativity
            <span className="desktop-only">
              {" "}armed with a pencil, paper, and their brilliant minds
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
