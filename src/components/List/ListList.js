import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

const isDesktopView = window.innerWidth > 810;

const List = styled.div`
  header {
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 320%;
      font-weight: 700;
    }
  }
  span {
    margin: 16px;
    display: flex;
    align-items: center;
    i {
      font-size: 80%;
      margin-right: 15px;
    }
    font-size: 200%;
  }
  @media (min-width: 810px) {
    width: 1668px;
    margin: 77px auto;
    h2 {
      font-size: 400%;
    }
    span {
      i {
        font-size: 80%;
        margin-right: 15px;
      }
      font-size: 320%;
    }
  }
`;

const ListList = ({ data }) => {
  return (
    <List>
      <header>
        <h2>Twoje listy ({data.length})</h2>
        {isDesktopView && (
          <span>
            <i className='fas fa-plus'></i> Utwórz własną listę
          </span>
        )}
      </header>
      {data.map((list) => {
        return <ListItem key={list.id} data={list} />;
      })}
      {!isDesktopView && (
        <span>
          <i className='fas fa-plus'></i> Utwórz własną listę
        </span>
      )}
    </List>
  );
};

export default ListList;
