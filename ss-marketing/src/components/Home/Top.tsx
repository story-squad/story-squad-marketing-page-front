
import styled from "styled-components";
import Pencil from "./imgs/hero-pencil.png";

function Top() {
  return (
    <Container>
      <Image>
        <img src={Pencil} alt="hero_pencil" />
      </Image>
      <TextAndButton>
        <h3>
          Story Squad is the world’s first “creativity arcade” built around
          kids’ original handwritten stories and drawing.
        </h3>
        <button>Learn More</button>
      </TextAndButton>
    </Container>
  );
}

//styles

const Container = styled.div`

  background-color: #E6F9FF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 2rem 0 2rem;
`;

const Image = styled.div`
img{
    margin: 0px 20px -4px 0px;
}
`;
const TextAndButton = styled.div`
border: 2px solid blue;
height: 126px;
width: 693px;
left: 423px;
top: 265px;
text-align: center;
h3 {
    font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 42px;
text-align: center;
color: #101011;
}
`;


export default Top;
