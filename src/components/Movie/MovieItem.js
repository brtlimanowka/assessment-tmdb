import React from 'react';
import styled from 'styled-components';
import { WEB_URL } from '../../utils/properties';

const IMAGE_URL = `${WEB_URL}/t/p/w300_and_h450_bestv2/`;
const isDesktopView = window.innerWidth > 810;

const Card = styled.div`
  height: 200px;
  width: 288px;
  margin: 20px auto;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
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
      font-size: 240%;
    }
    h3 {
      margin: 4px 0;
      font-size: 120%;
    }
    a {
      text-decoration: none;
      color: unset;
    }
    div.card__genres {
      display: flex;
      margin-top: 5px;
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
    div.card__description {
      margin: 5px 0;
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
    height: 684px;
    width: 1668px;
    margin: 80px auto;
    div.card__poster {
      margin: 30px;
      height: 604px;
      min-width: 462px;
      border-radius: 24px;
    }
    div.card__details {
      margin: 30px 31px 30px 0;
      h2 {
        font-size: 480%;
        font-weight: 700;
      }
      h3 {
        margin: 32px 0;
        font-size: 240%;
      }
      p {
        label,
        span {
          font-size: 240%;
        }
        label {
          color: ${({ theme }) => theme.colors.detailsFont};
        }
      }
      div.card__genres {
        margin: 26px 0;
        display: flex;
        div.card__genre {
          height: 28px;
          margin-right: 8px;
          span {
            font-size: 200%;
            line-height: 28px;
          }
        }
      }
      div.card__description {
        label {
          font-size: 240%;
        }
        p {
          margin: 32px 0;
          padding: 0 20px;
          font-size: 180%;
          line-height: 24px;
          text-align: justify;
        }
      }
      div.card__rating {
        span.card__average {
          font-size: 240%;
        }
        span.card__total-votes {
          font-size: 240%;
        }
      }
    }
  }
`;

const MovieItem = ({ data }) => {
  const backgroundURL = `url(${IMAGE_URL}/${data.poster_path})`;
  let genresList = data.genres;
  let title = data.title;
  let description = data.overview;
  if (isDesktopView) {
    genresList = genresList.slice(0, 3);
  } else {
    genresList = genresList.slice(0, 1);
    title = title.substring(0, 8) + '...';
    description = description.substring(0, 100) + '...';
  }

  return (
    <Card>
      <div
        className='card__poster'
        style={{ backgroundImage: backgroundURL }}></div>
      <div className='card__details'>
        <h2>{title}</h2>
        <h3>{new Date(data.release_date).getFullYear()}</h3>
        <p>
          {isDesktopView && <label>Produkcja: </label>}
          <span>{data.production_countries[0].name}</span>
        </p>
        {isDesktopView && (
          <p>
            <label>Data premiery: </label>
            <span>{new Date(data.release_date).toLocaleDateString('pl')}</span>
          </p>
        )}
        <div className='card__genres'>
          {genresList.map((genre) => (
            <div key={genre.id} className='card__genre'>
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
        <div className='card__description'>
          {isDesktopView && <label>Opis</label>}
          <p>{description}</p>
        </div>
        <div className='card__rating'>
          <span className='card__average'>{data.vote_average}</span>
          <span className='card__total-votes'>({data.vote_count} głosów)</span>
        </div>
      </div>
    </Card>
  );
};

export default MovieItem;