import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 125px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 62px;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primaryBackground};
    }
  }
  div.container__logo i {
    position: absolute;
    width: 68px;
    height: 62px;
    left: 116px;
    top: 32px;
  }
  div.container__lists {
    display: flex;
    justify-content: space-between;
    width: 110px;
    margin-right: 116px;
    i {
      font-size: 36px;
    }
  }
`;

const Menu = () => {
  return (
    <Container>
      <div className='container__logo'>
        <Link to='/'>
          <i className='fas fa-video' title='Strona główna'></i>
        </Link>
      </div>
      <div className='container__lists'>
        <div className='container__your-lists'>
          <i className='fas fa-bars' title='Twoje listy'></i>
        </div>
        <div className='container__new-list'>
          <i className='fas fa-plus' title='Utwórz własną listę'></i>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
