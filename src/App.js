import styled, { keyframes } from 'styled-components';

const Chlid = styled.span`
    font-size: 15px;
`

const Wrapper = styled.div`
  display: flex;

  ${Chlid}:hover {
      font-size: 20px;
  }
`;

const Box = styled.div`
  background: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  &:hover {
    background: green;
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  background: tomato;
  color: white;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  border: 1px solid #000;
  outline: none;
`;

const rotate = keyframes`
0%{
transform: rotate(0deg);
}
100%{
transform: rotate(360deg);
}
`;

const AnimationBox = styled(Box)`
  animation: ${rotate} 1s linear;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="red" />
      </Wrapper>

      <Wrapper>
        <Btn>Click!</Btn>
        <Btn as="a" href="/">
          Click!
        </Btn>
      </Wrapper>

      <Wrapper>
        <Input />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Input />
        <br />
      </Wrapper>

      <Wrapper>
        <AnimationBox bgColor="black" />
      </Wrapper>

      <Wrapper>
        <Chlid>This is normal span!</Chlid>
      </Wrapper>
    </div>
  );
}

export default App;
