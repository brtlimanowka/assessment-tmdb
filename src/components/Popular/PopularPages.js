import React from 'react';
import styled from 'styled-components';

const Pagination = styled.div`
  width: 700px;
  height: 36px;
  margin: 57px auto 55px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    background-color: ${({ theme }) => theme.colors.secondaryButton};
    height: 32px;
    padding: 8px 16px;
    border: none;
    outline: none;
    border-radius: 5px;
    span {
      margin: 0 8px;
      font-size: 16px;
      line-height: 16px;
    }
    i {
      vertical-align: text-top;
      color: ${({ theme }) => theme.colors.highlight};
    }
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.highlight};
      i {
        color: ${({ theme }) => theme.colors.secondaryButton};
      }
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.primaryButton};
      cursor: not-allowed;
      i {
        color: ${({ theme }) => theme.colors.primaryFont};
      }
    }
  }
  div.pagination__status {
    margin: 0 24px;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.pagination};
    strong {
      color: ${({ theme }) => theme.colors.primaryFont};
      font-size: inherit;
      line-height: inherit;
      font-weight: 700;
    }
  }
`;

const PopularPages = ({ currentPage, lastPage, onCurrentPageChanged }) => {
  const firstClickedHandler = () => onCurrentPageChanged(1);
  const previousClickedHandler = () => onCurrentPageChanged(currentPage - 1);
  const nextClickedHandler = () => onCurrentPageChanged(currentPage + 1);
  const lastClickedHandler = () => onCurrentPageChanged(lastPage);

  return (
    <Pagination>
      <button disabled={currentPage === 1} onClick={firstClickedHandler}>
        <i className='fas fa-chevron-left'></i> <span>Pierwsza</span>
      </button>
      <button disabled={currentPage === 1} onClick={previousClickedHandler}>
        <i className='fas fa-chevron-left'></i> <span>Poprzednia</span>
      </button>
      <div className='pagination__status'>
        Strona <strong>{currentPage}</strong> z <strong>{lastPage}</strong>
      </div>
      <button disabled={currentPage === lastPage} onClick={nextClickedHandler}>
        <span>Następna</span>
        <i className='fas fa-chevron-right'></i>
      </button>
      <button disabled={currentPage === lastPage} onClick={lastClickedHandler}>
        <span>Ostatnia</span>
        <i className='fas fa-chevron-right'></i>
      </button>
    </Pagination>
  );
};

export default PopularPages;
