import { useState } from "react";
import SvgImage from "./SvgLogo";
import styled from "styled-components";

const App = () => {
  const [size, setSize] = useState(0);

  function handleClick() {
    for (let i = 0; i < 5; i += 0.3) {
      setTimeout(() => {
        setSize(i);
      }, 100 * i);
    }
  }

  return (
    <StyledContainer>
      <SvgImage color="white" size={size} />
      <button onClick={handleClick}>Animar!</button>
    </StyledContainer>
  );
};

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  & > button {
    margin: 10vh;
    background-color: #e7e7e7;
    color: black;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`;
