import React from 'react';
import PopularItem from './PopularItem';
import styled from 'styled-components';

const Container = styled.div`
  margin: 77px 117px;
  h1 {
    margin-left: 11px;
    margin-bottom: 77px;
    font-size: 400%;
    font-weight: bold;
  }
`;

const PopularList = ({ data }) => {
  return (
    <Container>
      <h1>Wszystkie filmy</h1>
      {data.map((movie) => {
        return <PopularItem key={movie.id} data={movie} />;
      })}
    </Container>
  );
};

export default PopularList;
