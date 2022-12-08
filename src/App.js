import './App.css';
import { H1Hover, StyledButton, StyledButtonHover } from './Components/Styled/Button';
import { H1 } from './Components/Styled/H1';
import { StyledDiv } from './Components/Styled/StyledDiv';

function App() {
  return (
    <div className="App">
      <div className='button_box'>
        <StyledButton>Live</StyledButton>
        <StyledButton variant='primary'>Github</StyledButton>
        <StyledButtonHover>Hover Me</StyledButtonHover>
      </div>
      <H1 color="red">Hello Mare Darling</H1>
      <H1Hover color='green'>Darling ar vatar ache</H1Hover>
      <StyledDiv>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quam?</p>
        <a href="#">Link</a>
      </StyledDiv>
    </div>
  );
}

export default App;
