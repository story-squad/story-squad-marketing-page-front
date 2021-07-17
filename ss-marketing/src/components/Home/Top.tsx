// import styled from "styled-components";
import Pencil from "./imgs/hero-pencil.png";
import './styles/Top.css'

function Top() {
  return (
    <div className="container">
      <div>
        <img src={Pencil} alt="hero_pencil" />
      </div>
      <div className='textAndButton'>
        <p>
          Story Squad is the world’s first “creativity arcade” built around
          kids’ original handwritten stories and drawing.
        </p>
        <button>
          <p>Learn More</p>
        </button>
      </div>
    </div>
  );
}

//styles

// const Container = styled.div`
//   background-color: #e6f9ff;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   padding: 2rem 2rem 0 2rem;
// `;

// const Image = styled.div`
//   img {
//     margin: 0px 20px -4px 0px;
//   }
// `;
// const TextAndButton = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 126px;
//   width: 693px;
//   left: 423px;
//   top: 265px;
//   text-align: center;
//   h3 {
//     font-family: "Lato", sans-serif;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 32px;
//     line-height: 42px;
//     text-align: center;
//     color: #101011;
//   }
//   button {
//     margin-top: 5%;
//     padding: 12px 40px;
//     width: 185px;
//     height: 48px;
//     background: #ff7f34;
//     border-radius: 50px;
//     p {
//       position: static;
//       width: 105px;
//       height: 22px;
//       left: calc(50% - 105px / 2);
//       top: calc(50% - 22px / 2);
//       font-family: "Mulish";
//       font-style: normal;
//       font-weight: bold;
//       font-size: 16px;
//       line-height: 22px;
//       display: flex;
//       align-items: center;
//       text-align: center;
//       text-transform: uppercase;
//       color: #fdfdfd;
//       flex: none;
//       order: 0;
//       flex-grow: 0;
//       margin: 0px 2px;
//     }
//   }
// `;

export default Top;
