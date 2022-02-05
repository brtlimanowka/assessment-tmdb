import React from 'react';
import styled from 'styled-components';
import { WEB_URL } from '../../utils/properties';

const IMAGE_URL = `${WEB_URL}/t/p/w300_and_h450_bestv2/`;
const isDesktopView = window.innerWidth > 810;

const Card = styled.div`
  height: 200px;
  width: 288px;
  margin-bottom: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
  }
  div.card__poster {
    margin: 16px 0 16px 16px;
    height: 168px;
    min-width: 123px;
    border-radius: 12px;
    background-size: cover;
  }
  div.card__details {
    margin: 16px 0 12px 8px;
    h2 {
      font-size: 24px;
    }
    a {
      text-decoration: none;
      color: unset;
    }
    div.card__genres {
      margin: 8px 1px 74px 0;
      display: flex;
      div.card__genre {
        height: 24px;
        padding: 4px 8px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        span {
          margin: 0 8px;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    div.card__rating {
      span.card__average {
        margin-right: 9px;
        font-size: 120%;
      }
      span.card__total-votes {
        font-size: 120%;
        color: ${({ theme }) => theme.colors.secondaryFont};
      }
    }
  }
  @media (min-width: 810px) {
    height: 664px;
    width: 399px;
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
          margin-right: 8px;
          span {
            font-size: 14px;
            line-height: 28px;
          }
        }
      }
      div.card__rating {
        span.card__average {
          font-size: 160%;
        }
        span.card__total-votes {
          font-size: 160%;
        }
      }
    }
  }
`;

const PopularItem = ({ data, genres }) => {
  const backgroundURL = `url(${IMAGE_URL}/${data.poster_path})`;
  let genresList = data.genre_ids.map(
    (id) => genres.genres.find((genre) => genre.id === id).name
  );
  let title;
  if (isDesktopView) {
    title =
      data.title.length > 19 ? data.title.substring(0, 18) + '...' : data.title;
    genresList = genresList.slice(0, 3);
  } else {
    title =
      data.title.length > 8 ? data.title.substring(0, 7) + '...' : data.title;
    genresList = genresList.slice(0, 1);
  }

  return (
    <Card>
      <a href={`/movie/${data.id}`} title='Szczegóły'>
        <div
          className='card__poster'
          style={{ backgroundImage: backgroundURL }}></div>
      </a>
      <div className='card__details'>
        <a href={`/movie/${data.id}`} title='Szczegóły'>
          <h2>{title}</h2>
        </a>
        <div className='card__genres'>
          {genresList.map((genre) => (
            <div key={genre} className='card__genre'>
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
