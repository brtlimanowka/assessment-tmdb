import React from 'react';
import PopularItem from './PopularItem';
import PopularPages from './PopularPages';
import styled from 'styled-components';

const Container = styled.div`
  margin: 16px;
  h1 {
    margin-left: 11px;
    margin-bottom: 16px;
    font-size: 320%;
    font-weight: bold;
  }
  div.container__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  @media (min-width: 810px) {
    margin: 77px 117px;
    h1 {
      margin-bottom: 77px;
      font-size: 400%;
    }
    div.container__items {
      width: 1688px;
    }
  }
`;

const PopularList = ({ data, genres, onCurrentPageChanged }) => {
  return (
    <Container>
      <h1>Wszystkie filmy</h1>
      <div className='container__items'>
        {data.results.map((movie) => {
          return <PopularItem key={movie.id} data={movie} genres={genres} />;
        })}
      </div>
      <PopularPages
        currentPage={data.page}
        lastPage={500}
        onCurrentPageChanged={onCurrentPageChanged}
      />
    </Container>
  );
};

export default PopularList;
