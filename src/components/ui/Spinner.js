import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto 0;
  display: flex;
`;
const Dot = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryButton};
  height: 30px;
  width: 30px;
  margin: 0 25px;
  border-radius: 30px;
  animation: pulse 1.5s linear infinite;
  animation-delay: ${(props) => props.delay};

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(100%);
    }
    7% {
      opacity: 0.3;
      transform: scale(75%);
    }
    14% {
      opacity: 0.1;
      transform: scale(50%);
    }
    21% {
      opacity: 0.3;
      transform: scale(75%);
    }
    28% {
      opacity: 1;
      transform: scale(100%);
    }
  }
`;

const Spinner = () => {
  return (
    <Container>
      <Dot delay='0s' />
      <Dot delay='0.3s' />
      <Dot delay='0.6s' />
    </Container>
  );
};

export default Spinner;
