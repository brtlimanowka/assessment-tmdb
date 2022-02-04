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
  div.container__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 1688px;
  }
`;

const PopularList = ({ data, genres }) => {
  return (
    <Container>
      <h1>Wszystkie filmy</h1>
      <div className='container__items'>
        {data.map((movie) => {
          return <PopularItem key={movie.id} data={movie} genres={genres} />;
        })}
      </div>
    </Container>
  );
};

export default PopularList;
