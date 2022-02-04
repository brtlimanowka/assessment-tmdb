import React from 'react';
import styled from 'styled-components';
import { WEB_URL } from '../../utils/properties';

const IMAGE_URL = `${WEB_URL}/t/p/w300_and_h450_bestv2/`;

const Card = styled.div`
  height: 664px;
  width: 399px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  div.card__poster {
    margin: 30px auto;
    height: 426px;
    width: 338px;
    border-radius: 47px;
  }
  div.card__details {
    margin: 0 31px 30px 31px;
    h2 {
      font-size: 32px;
    }
    div.card__genres {
      margin: 26px 0;
      display: flex;
      div.card__genre {
        height: 28px;
        padding: 4px 8px;
        margin-right: 8px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        span {
          margin: 0 8px;
          font-size: 14px;
          line-height: 28px;
        }
      }
    }
    div.card__rating {
      span.card__average {
        margin-right: 9px;
        font-size: 160%;
      }
      span.card__total-votes {
        font-size: 160%;
        color: ${({ theme }) => theme.colors.secondaryFont};
      }
    }
  }
`;

const PopularItem = ({ data, genres }) => {
  const backgroundURL = `url(${IMAGE_URL}/${data.poster_path})`;
  const title =
    data.title.length > 19 ? data.title.substring(0, 18) + '...' : data.title;
  const genresList = data.genre_ids.map(
    (id) => genres.genres.find((genre) => genre.id === id).name
  );

  return (
    <Card>
      <div
        className='card__poster'
        style={{ backgroundImage: backgroundURL }}></div>
      <div className='card__details'>
        <h2>{title}</h2>
        <div className='card__genres'>
          {genresList.map((genre) => (
            <div className='card__genre'>
              <span>{genre}</span>
            </div>
          ))}
        </div>
        <div className='card__rating'>
          <span className='card__average'>{data.vote_average}</span>
          <span className='card__total-votes'>({data.vote_count} głosów)</span>
        </div>
      </div>
    </Card>
  );
};

export default PopularItem;
