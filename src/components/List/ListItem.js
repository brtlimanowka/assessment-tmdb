import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 1668px;
  height: 369px;
  box-shadow: ${({ theme }) => theme.shadow};
  header {
    h1 {
      font-size: 240%;
    }
    i {
      font-size: 240%;
      color: ${({ theme }) => theme.colors.delete};
    }
  }
  article {
  }
  @media (min-width: 810px) {
    width: 1668px;
    height: 369px;
    header {
      padding: 56px 48px 32px 48px;
      h1 {
        font-size: 480%;
      }
    }
  }
`;

const ListItem = ({ data }) => {
  return (
    <Card>
      <header>
        <h1>{data.name}</h1>
        <i class='far fa-trash-alt' title='Usuń listę'></i>
      </header>
      <article>{data.description}</article>
    </Card>
  );
};

export default ListItem;
