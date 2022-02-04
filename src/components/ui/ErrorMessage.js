import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
`;

const ErrorMessage = ({ errorMessage }) => {
  return <Container>Coś poszło nie tak: {errorMessage}</Container>;
};

export default ErrorMessage;
